import { Container, DishImage } from "./styles";
import { FiHeart, FiMinus, FiPlus } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

import { api } from "../../services/api";
import { useCart } from "../../hooks/cart";

import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ButtonText } from "../ButtonText";

export function DishUsers({ data, onClick, isFavorite = false, ...rest }) {
  const [cart, setCart] = useCart();
  const [amount, setAmount] = useState(1);
  const navigate = useNavigate();
  const { id } = data;
  const [imageDish, setImageDish] = useState(null);

  function handleClickImage() {
    navigate(`/detalhe-do-produto/${id}`);
  }

  function handleDecrease() {
    if (amount <= 1) {
      return alert("O valor mínimo é um prato por pedido.");
    }
    setAmount(prevState => prevState - 1);
  }

  function handleIncrease() {
    if (amount >= 15) {
      return alert("Só são permitidos quinze pratos por pedido.");
    }
    setAmount(prevState => prevState + 1);
  }

  function handleAddNewItemCart() {
    const newItemCart = {
      id: data.id,
      name: data.name,
      imageDish: imageDish,
      amount,
      unit_price: data.price,
      total_price: amount * data.price
    };

    setCart(prevCart => [...prevCart, newItemCart]);
    setAmount(1);
  }

  useEffect(() => {
    async function fetchImageDish() {
      if (data) {
        setImageDish(`${api.defaults.baseURL}/files/${data.avatar_dish}`);
      }
    }

    fetchImageDish();
  }, [data]);

  return (
    <Container {...rest}>
      <button onClick={onClick}>
        {isFavorite ? <FaHeart className="redHeart" /> : <FiHeart />}
      </button>

      <DishImage>
        <img
          src={imageDish}
          alt={`Ìmagem do prato - ${data.name}`}
          onClick={handleClickImage}
        />
      </DishImage>

      <ButtonText
        title={data.name}
        icon={IoIosArrowForward}
        onClick={handleClickImage}
      />

      <h2>{data.description}</h2>

      <span>{`R$ ${data.price.toFixed(2)}`}</span>

      <footer>
        <div>
          <button type="button" onClick={handleDecrease}>
            <FiMinus />
          </button>

          <span>{amount}</span>

          <button type="button" onClick={handleIncrease}>
            <FiPlus />
          </button>
        </div>

        <Button title="incluir" onClick={handleAddNewItemCart} />
      </footer>
    </Container>
  );
}
