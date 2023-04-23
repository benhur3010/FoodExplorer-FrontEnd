import { Container } from "./styles";
import { FiChevronLeft } from "react-icons/fi";

import { HeaderUsers } from "../../../components/HeaderUsers";
import { Footer } from "../../../components/Footer";
import { Section } from "../../../components/Section";
import { DishFavoritesUsers } from "../../../components/DishFavoritesUsers";

import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/auth";

import { useNavigate } from "react-router-dom";
import { Button } from "../../../components/Button";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Circles } from "react-loader-spinner";

export function Favorites () {
    const { isLoading, setIsLoading } = useAuth();
    const [image, setImage] = useState({});
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);

    function handleNavigate () {
        navigate(-1)
    };

    async function handleRemoveFavorites (deleted) {
        setIsLoading(true);
        await api.delete(`/favorites/${deleted}`);
        const response = await api.get("/favorites");
        setFavorites(response.data);
        setIsLoading(false);
        toast.success("Prato removido dos favoritos.", {
            position: toast.POSITION.TOP_CENTER
        });
    }

    useEffect(() => {
        async function fetchFavorites() {
            setIsLoading(true);
            const response = await api.get("/favorites");
            setIsLoading(false);
            setFavorites(response.data);
        }

        fetchFavorites();
    }, [])

    useEffect(() => {
        function fetchImageDish () {
            if(favorites) {
                setImage((prevState) => ({
                    ...prevState,
                    ...favorites.reduce((acc, dish) => {
                        if (dish.avatar_dish) {
                            acc[dish.id] = `${api.defaults.baseURL}/files/${dish.avatar_dish}`;
                        }
                        return acc;
                    }, {}),
                }));
            }
        };

        fetchImageDish();
    }, [favorites])

    return (
        <Container>
            <HeaderUsers/>

            <Section title="Meus favoritos">
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
                favorites &&
                <ul>
                    <li>
                    {
                        favorites.map((dish, index) => (
                            <DishFavoritesUsers
                            key={String(index)}
                            data={{
                                title: dish.name,
                                imageDish: image[dish.id],
                            }}
                            onClick={() => handleRemoveFavorites(dish.id)}
                            />
                        ))
                    }
                    </li>
                </ul>
            }

                    <footer>
                    <Button
                    icon={FiChevronLeft}
                    title="Voltar"
                    onClick={handleNavigate}
                    />
                    </footer>
                    </>
                    )
            }
            </Section>

            <Footer/>
        </Container>
    )
}