import { Container, DishImage } from "./styles";
import { BsPencil } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ButtonText } from "../ButtonText";

export function DishAdmin({ data, onClick, isFavorite = false, ...rest }) {
  const navigate = useNavigate();

  const [imageDish, setImageDish] = useState(null);
  const { id } = data;

  function handleClickImage() {
    navigate(`/detalhe-do-produto/${id}`);
  }

  function handleClickEditDish() {
    navigate(`/editdish/${id}`);
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
      {data && (
        <>
          <button onClick={handleClickEditDish} className="pencil">
            <BsPencil />
          </button>

          <button onClick={onClick} className="favorite">
            {isFavorite ? <FaHeart className="redHeart" /> : <FiHeart />}
          </button>

          <DishImage>
            <img src={imageDish} alt={data.name} onClick={handleClickImage} />
          </DishImage>

          <ButtonText
            title={data.name}
            onClick={handleClickImage}
            icon={IoIosArrowForward}
          />

          <span>{`R$ ${data.price.toFixed(2)}`}</span>
        </>
      )}
    </Container>
  );
}
