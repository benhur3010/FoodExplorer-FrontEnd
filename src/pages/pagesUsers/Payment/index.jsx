import { Container, Content, Form, Request } from "./styles";

import { AiOutlineCreditCard, AiOutlineCheckCircle } from "react-icons/ai";
import { BsFillXDiamondFill } from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";


import { HeaderUsers } from "../../../components/HeaderUsers";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Input } from "../../../components/Input";
import { DishFavoritesUsers } from "../../../components/DishFavoritesUsers";

import { useAuth } from "../../../hooks/auth";

import imagePix from "../../../assets/imagePix.svg";

import { useEffect, useState } from "react";
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";

import { useNavigate } from "react-router-dom";
import { useCart } from "../../../hooks/cart";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { Circles } from "react-loader-spinner";

export function Payment() {
    const [cart, setCart] = useCart();
    const { user, isLoading, setIsLoading } = useAuth();

    const [validity, setValidity] = useState("");
    const [numberCard, setNumberCard] = useState("");
    const [codeSecurity, setCodeSecurity] = useState("");

    const [totalPrice, setTotalPrice] = useState("");
    const [buttonPix, setButtonPix] = useState(true);
    const [buttonCard, setButtonCard] = useState(false);
    const [whenFinish, setWhenFinish] = useState(true);
    const [finish, isFinish] = useState(false);

    const [isScreenDesktop, setIsScreeDesktop] = useState(window.innerWidth > 820); 

    const navigate = useNavigate();

    function handleRemoveItemCart (deleted) {
        setCart(prevCart => prevCart.filter(item => item !== deleted));
    }

    function handleBack () {
        if(!finish) {
            navigate(-1);
        } else {
            navigate("/");
        }
    }

    function handleButtonPix() {
        setButtonPix(true);
        setButtonCard(false);
    }

    function handleButtonCard() {
        setButtonPix(false);
        setButtonCard(true);
    }

    function handleWhenFinish () {
        if(cart.length <= 0) {
            return alert("Não há itens no carrinho.")
        }
        

        if(!numberCard || !codeSecurity || !validity) {
            return toast.error("Preencha todos os campos (os dados não precisam ser verdadeiros)", {
                position: toast.POSITION.TOP_RIGHT
            });
        }

        handleNewOrder();

    }

    function handleClickReturn() {
        setWhenFinish(true);
        navigate("/");
    }

    async function handleNewOrder () {

        try{
            setIsLoading(true);
            const response = await api.post("/requests", { user_id: user.id });
            const newOrder = response.data;

            if(newOrder) {
                await api.post("items_requests", {
                    request_id: newOrder.id,
                    items: cart.map(item => ({
                        amount: item.amount,
                        dish_id: item.id,
                        unit_price: item.unit_price,
                        total_price: item.amount * item.unit_price

                    }))
                });
                setIsLoading(false);
                setCart([]);
                setWhenFinish(false);
                isFinish(true);
                return toast.success("Pedido confirmado! Aguarde a entrega. Você pode ir acompanhando o pedido na aba 'Histórico de pedidos' ", {
                    position: toast.POSITION.TOP_CENTER
                });
            }
            setIsLoading(false);

        } catch (error) {
            setIsLoading(false);
            console.log(error);
            setWhenFinish(true);
            isFinish(false);
            return toast.error("Você está deslogado, faça o login novamente para navegar.", {
                position: toast.POSITION.TOP_RIGHT
            });
        }


    }

    useEffect(() => {
        const carts = cart.map(item => item.total_price);
        const sum = carts.reduce((acc, curr) => acc + curr, 0);
        setTotalPrice(sum.toFixed(2));
    }, [cart]);

    useEffect(() => {
        const handleWindowResize = () => {
            setIsScreeDesktop(window.innerWidth > 820);
        }
        handleWindowResize();

        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [isScreenDesktop]);

    return (
        <Container>
            <HeaderUsers/>

        {
            isLoading ? 
            (
                <div className="loader">
                    <Circles
                    color="#126b37"
                    width="100"
                    height="100"
                    />
                </div>
            )
            :
            (
        <Content>

            {
                isScreenDesktop &&
            <Request>
                <h1>Meus pedidos</h1>

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
                            loading={finish}
                            />
                        ))
                    }
                    </li>
                }
                </ul>

                <span>Total: R$ {totalPrice}</span>

                <Button
                icon={FiArrowLeft}
                title="Voltar"
                onClick={handleBack}
                />
            </Request>
            }

            <Section title="Pagamento">
            <main>
                <div>
                    <ButtonText
                    icon={BsFillXDiamondFill}
                    title="PIX"
                    isActive={buttonPix}
                    onClick={handleButtonPix}
                    />
                    <ButtonText
                    icon={AiOutlineCreditCard}
                    title="Cartão" 
                    isActive={buttonCard}
                    onClick={handleButtonCard}
                    />
                </div>

                {
                    buttonPix ? (                
                        <img 
                        src={imagePix} 
                        alt="imagem do código pix" 
                        />) 
                        : 
                        (
                            <div>
                            {
                                whenFinish ? 
                        ( <Form>
                            <label htmlFor="numberCard">Número do Cartão</label>
                            <Input 
                                placeholder="0000 0000 0000 0000" 
                                type="number"
                                id="numberCard"
                                onChange={e => setNumberCard(e.target.value)}
                                onKeyPress={e => {
                                    if (e.target.value.length >= 16) {
                                        e.preventDefault();
                                    }
                                    }}
                            />

                            <div>
                                <div>
                                <label htmlFor="validity">Validade</label>
                                <Input 
                                placeholder="04/25" 
                                type="data"
                                id="validity"
                                onChange={e => setValidity(e.target.value)}
                                maxLength="4"
                                />
                                </div>

                                <div>
                                <label htmlFor="code">CVC</label>
                                <Input 
                                placeholder="000" 
                                type="number"
                                id="code"
                                onChange={e => setCodeSecurity(e.target.value)}
                                onKeyPress={e => {
                                    if (e.target.value.length >= 3) {
                                        e.preventDefault();
                                    }
                                    }}
                                />
                                </div>
                            </div>

                            <Button 
                            onClick={handleWhenFinish}
                            title="Finalizar pagamento"
                            className="buttonFinalize"
                            />
                        </Form>
                        ) : 
                            (
                            <div className="paymentFinalize">
                                <AiOutlineCheckCircle/>
                                <p>Pagamento aprovado!</p>

                                <Button 
                                onClick={handleClickReturn}
                                title="Voltar"
                                />
                            </div>
                        )
                        }
                        </div>
                        )
                }

            </main>
            </Section>

        </Content>
        )
        }


            <Footer/>
        </Container>
    )
}