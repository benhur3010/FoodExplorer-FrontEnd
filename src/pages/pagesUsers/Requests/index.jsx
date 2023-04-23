import { Container, Content } from "./styles";
import { HeaderUsers } from "../../../components/HeaderUsers";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Button } from "../../../components/Button";
import { DishFavoritesUsers } from "../../../components/DishFavoritesUsers";

import { useCart } from "../../../hooks/cart";

import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { ButtonText } from "../../../components/ButtonText";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";

export function Requests() {
    const [cart, setCart] = useCart();
    const navigate = useNavigate();
    const [totalPrice, setTotalPrice] = useState("");

    function handleClickBack () {
        navigate(-1)
    }

    function handleClickProgress () {
        if(cart.length <= 0) {
            return toast.error("Não há itens no carrinho.", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
        navigate("/payment");
    }

    function handleRemoveItemCart (deleted) {
        setCart(prevCart => prevCart.filter(item => item !== deleted))
    }

    useEffect(() => {
        const carts = cart.map(item => item.total_price);
        const sum = carts.reduce((acc, curr) => acc + curr, 0);
        setTotalPrice(sum.toFixed(2));
    }, [cart]);

    return (
        <Container>
            <HeaderUsers/>
            <Content>
                
            <ButtonText 
            icon={FiArrowLeft}
            title="Voltar"
            onClick={handleClickBack}
            />

            <Section title="Meu pedido">
                <ul>
                {
                    cart &&
                    <li>
                    {
                        cart.map((item, index) => (
                            <DishFavoritesUsers
                            key={index}
                            data={{
                                title: item.name,
                                amount: item.amount,
                                price: item.unit_price,
                                imageDish: item.imageDish
                            }}
                            onClick={() => handleRemoveItemCart(item)}
                            />
                        ))
                    }
                    </li>
                }
                </ul>


            </Section>

            <span>Total: R$ {totalPrice}</span>


            <Button 
            icon={FiArrowRight}
            title="Avançar"
            onClick={handleClickProgress}
            />
            </Content>
            <Footer/>
        </Container>
    )
}