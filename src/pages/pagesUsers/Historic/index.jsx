import { Container, Content } from "./styles";
import { HeaderUsers } from "../../../components/HeaderUsers";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";

import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/auth";

import { FiArrowLeft } from "react-icons/fi";
import { ButtonText } from "../../../components/ButtonText";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { HistoricRequest } from "../../../components/HistoricRequest";
import { Circles } from "react-loader-spinner";

export function Historic() {
    const { user, isLoading, setIsLoading } = useAuth();
    const [itemsOrder, setItemsOrder] = useState([]);
    const [isScreenDesktop, setIsScreenDesktop] = useState(window.innerWidth > 820);

    const navigate = useNavigate();

    function handleClickBack () {
        navigate(-1)
    }

    useEffect(() => {
        const handleWindowResize = () => {
            setIsScreenDesktop(window.innerWidth > 820);
        };
            handleWindowResize();
        window.addEventListener("resize", handleWindowResize);

        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    useEffect(() => {
        async function fetchRequests () {
            setIsLoading(true);
            const response = await api.get(`/requests/${user.id}`);
            setItemsOrder(response.data.map(item => ({ ...item, status: item.status })));
            setIsLoading(false);
        }

        fetchRequests();
    }, []);

    return (
        <Container>
            <HeaderUsers/>
            <Content>
                
            {
                !isLoading &&
            <ButtonText 
            icon={FiArrowLeft}
            title="Voltar"
            onClick={handleClickBack}
            />
            }


            <Section title="Histórico de Pedidos">
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
            <>
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
                        <HistoricRequest
                            key={index}
                            data={{
                                status: item.status,
                                code: String(item.id).padStart(5, '0'),
                                created_at: item.created_at
                            }}
                            value={item.status}
                            details={item.items.map((i, index) => `${i.amount} x ${i.dish_name}${index > item.items.length -2 ? '': ', '}  `)}
                        />
                ))
            }
            </form>
            }

            </>
            )
        }
            </Section>
            </Content>
            <Footer/>
        </Container>
    )
}