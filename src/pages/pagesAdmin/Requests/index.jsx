import { Container, Content } from "./styles";
import { HeaderAdmin } from "../../../components/HeaderAdmin";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { Button } from "../../../components/Button";

import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/auth";

import { FiArrowLeft } from "react-icons/fi";
import { ButtonText } from "../../../components/ButtonText";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ListRequests } from "../../../components/ListRequests";
import { ThreeCircles } from "react-loader-spinner";
import { toast } from "react-toastify";

export function Requests() {
    const { isLoading, setIsLoading } = useAuth();

    const [itemsOrder, setItemsOrder] = useState([]);
    const [isScreenDesktop, setIsScreenDesktop] = useState(window.innerWidth > 820);

    const navigate = useNavigate();

    function handleClickBack () {
        navigate(-1)
    }

    async function handleUpdateStatus(itemIds) {
        setIsLoading(true);
        await Promise.all(itemIds.map(itemId => {
            const item = itemsOrder.find(item => item.id === itemId);
            api.patch(`requests/${itemId}`, {status: item.status} );
        setIsLoading(false);
        }));

        toast.success("Status atualizado com sucesso.", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    useEffect(() => {
        const handleWindowResize = () => {
            setIsScreenDesktop(window.innerWidth > 820);
        }
            handleWindowResize();
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    useEffect(() => {
        async function fetchRequests () {
            setIsLoading(true);
            const response = await api.get(`/requests`);
            setItemsOrder(response.data.map(item => ({ ...item, status: item.status })));
            setIsLoading(false);
        }

        fetchRequests();
    }, []);

    return (
        <Container>
            <HeaderAdmin/>

        {
            isLoading ?
            (
            <div className="loader">
                <ThreeCircles
                color="#126b37"
                width="120"
                height="100"
                />
            </div>
            )
            :
            (
            <Content>
                
            <ButtonText 
            icon={FiArrowLeft}
            title="Voltar"
            onClick={handleClickBack}
            />

            <Section title="Pedidos">
            {
                itemsOrder &&
            <form>

                {
                    isScreenDesktop &&
                <nav>
                <span>
                    Status
                </span>

                <span>
                    Código
                </span>

                <span>
                    Detalhamento
                </span>

                <span>
                    Data e hora
                </span>
                </nav>
                }

            {
                itemsOrder.map((item, index) => (
                        <ListRequests
                            key={index}
                            data={{
                                status: item.status,
                                code: String(item.id).padStart(5, '0'),
                                created_at: item.created_at
                            }}
                            value={item.status}
                            details={item.items.map((i, index) => `${i.amount} x ${i.dish_name}${index > item.items.length -2 ? '': ', '}  `)}
                            onChange={e => {
                                const newStatus = e.target.value;
                            setItemsOrder(prevItems => prevItems.map(prevItem => {
                                if (prevItem.id === item.id) {
                                    return { ...prevItem, status: newStatus }
                                } else {
                                    return prevItem;
                                }
                            }))
                        }}
                        />
                ))
            }
            </form>
            }

            </Section>

            <Button 
            title="Atualizar pedidos"
            onClick={() => handleUpdateStatus(itemsOrder.map(item => item.id))}
            />
            </Content>
            )
        }

            <Footer/>
        </Container>
    )
}