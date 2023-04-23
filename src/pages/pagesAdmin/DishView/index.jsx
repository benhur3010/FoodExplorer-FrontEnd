import { Container, Content } from "./styles";
import { HeaderAdmin } from "../../../components/HeaderAdmin";
import { Footer } from "../../../components/Footer";
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiChevronLeft } from 'react-icons/fi';

import { useAuth } from "../../../hooks/auth";
import { api } from "../../../services/api";
import { Ingredients } from "../../../components/Ingredients";

import { ThreeDots } from "react-loader-spinner";

export function DishView ({ ...rest }) {
    const { isLoading, setIsLoading } = useAuth();

    const params = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [image, setImage] = useState(null);
    
    function handleNavigate () {
        navigate(-1)
    };
    
    function handleClickEdit () {
        navigate(`/editdish/${params.id}`);
    }

    useEffect(() => {
        async function fetchDishes() {
            setIsLoading(true);
            const response = await api.get(`/dishes/${params.id}`);
            setData(response.data);
            setIsLoading(false);
        }

        fetchDishes();
    }, [])

    useEffect(() => {
        function fetchImage() {
            if(data) {
                setImage(`${api.defaults.baseURL}/files/${data.avatar_dish}`);
            }
        }

        fetchImage();
    }, [data]);

      return (
        <Container 
        {...rest}
        >
            <HeaderAdmin/>

            {
                isLoading ? 
                (
                    <div className="loader">
                        <ThreeDots
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
            icon={FiChevronLeft}
            title="Voltar"
            onClick={handleNavigate}
            />

            {
                data &&
            <form>

                <img src={image} alt="Imagem da refeição" />

            <div>
                <h1>{data.name}</h1>

                <p>{data.description}</p>

            {
                data.ingredients &&
                 <span>
                     {
                        data.ingredients.map(ingredient => (
                            <Ingredients
                            key={String(ingredient.id)}
                            title={ingredient.name}
                            />
                        ))
                     }
                </span>
            }


                <Button 
                title="Editar prato"
                onClick={handleClickEdit}
                />

            </div>
            </form>
            }

            </Content>
            )
            }

            <Footer/>
        </Container>
    )
}