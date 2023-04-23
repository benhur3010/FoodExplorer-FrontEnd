import { Container, Content, Scrolling } from "./styles";
import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { useAuth } from "../../../hooks/auth";
import { api } from "../../../services/api";

import { HeaderAdmin} from "../../../components/HeaderAdmin";
import { About } from "../../../components/About";
import { Section } from "../../../components/Section";
import { DishAdmin } from "../../../components/DishAdmin";
import { Footer } from "../../../components/Footer";

import { toast } from "react-toastify";
import { ThreeCircles } from "react-loader-spinner";

export function Home () {
    const { user, isLoading, setIsLoading } = useAuth();
    const [search, setSearch] = useState("");
    const [dishes, setDishes] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const scrollMealList = useRef(null);
    const scrollDrinkList = useRef(null);
    const scrollDessertList = useRef(null);
    
    const handlePrevMealList = () => {
        scrollMealList.current.scrollBy({
        left: -120,
        behavior: 'smooth'
      });
    }
  
    const handleNextMealList = () => {
        scrollMealList.current.scrollBy({
        left: 120,
        behavior: 'smooth'
      });
    }

    const handlePrevDrinkList = () => {
        scrollDrinkList.current.scrollBy({
          left: -120,
          behavior: 'smooth'
        });
    }
    
    const handleNextDrinkList = () => {
        scrollDrinkList.current.scrollBy({
          left: 120,
          behavior: 'smooth'
        });
    }

    const handlePrevDessertList = () => {
        scrollDessertList.current.scrollBy({
          left: -120,
          behavior: 'smooth'
        });
    }
    
    const handleNextDessertList = () => {
        scrollDessertList.current.scrollBy({
          left: 120,
          behavior: 'smooth'
        });
    }

    async function handleAddFavorites (dishId) {

      try {
        const response = await api.get(`favorites/${user.id}`);
        const dishesFavorites = response.data;
        const isFavorite = dishesFavorites.filter(item => item.id === dishId).length;

        if(isFavorite) {
          await api.delete(`favorites/${dishId}`);
          setFavorites(favorites.filter(dish => dish !== dishId));
          toast.success("Prato removido dos favoritos.", {
            position: toast.POSITION.TOP_CENTER
          });

        } else {
          await api.post("favorites", {
            dish_id : dishId,
            user_id: user.id
          });
          setFavorites([...favorites, dishId]);
          toast.success("Prato salvo em favoritos.", {
            position: toast.POSITION.TOP_CENTER
          });
        }

    }catch (error) {
      console.error(error)
      toast.error("Você está deslogado, faça o login novamente para navegar.", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    }

    useEffect(() => {
      async function searchDishes() {
        const response = await api.get(`/dishes?dish=${search}&ingredients=${search}`);
        setDishes(response.data);
      }

      searchDishes();
    }, [search]);

    useEffect(() => {
      async function fetchFavorites () {
        setIsLoading(true);
        const response = await api.get(`favorites/${user.id}`);
        const listFavorites = response.data.map(item => item.id);
        setFavorites(listFavorites);
        setIsLoading(false);
      }

      fetchFavorites();
    }, []);

  return (
    <Container>

        <HeaderAdmin
        onChange={e => setSearch(e.target.value)}
        />

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
        <About/>

        <Section title="Refeições">
        <div ref={scrollMealList}>

          {
            dishes.filter(dish => dish.category_id === 1).length === 0 ?
            ( <p>Você ainda não adicionou nenhuma refeição.</p> )
            :
            (
              dishes.filter(dish => dish.category_id === 1).map(dish => (
                <DishAdmin
                key={String(dish.id)}
                data={dish}
                onClick={() => handleAddFavorites(dish.id)}
                isFavorite={favorites.includes(dish.id)}
                />
              ))
            )
          }
        </div>

        
        <Scrolling 
        direction="prev" 
        onClick={handlePrevMealList}
        >
            <FiChevronLeft/>
        </Scrolling>

        <Scrolling direction="next" onClick={handleNextMealList}>
            <FiChevronRight/>
        </Scrolling>
        
        </Section>

        <Section title="Sobremesas">
        <div ref={scrollDessertList}>
        {
            dishes.filter(dish => dish.category_id === 3).length === 0 ?
            ( <p>Você ainda não adicionou nenhuma sobremesa.</p> )
            :
            (
              dishes.filter(dish => dish.category_id === 3).map(dish => (
                <DishAdmin
                key={String(dish.id)}
                data={dish}
                onClick={() => handleAddFavorites(dish.id)}
                isFavorite={favorites.includes(dish.id)}
                />
              ))
            )
          }
        </div>

        <Scrolling 
        direction="prev" 
        onClick={handlePrevDessertList}
        >
            <FiChevronLeft/>
        </Scrolling>

        <Scrolling 
        direction="next" 
        onClick={handleNextDessertList}
        >
            <FiChevronRight/>
        </Scrolling>
        </Section>

        <Section title="Bebidas">
        <div ref={scrollDrinkList}>
        {
            dishes.filter(dish => dish.category_id === 2).length === 0 ?
            ( <p>Você ainda não adicionou nenhuma bebida.</p> )
            :
            (
              dishes.filter(dish => dish.category_id === 2).map(dish => (
                <DishAdmin
                key={String(dish.id)}
                data={dish}
                onClick={() => handleAddFavorites(dish.id)}
                isFavorite={favorites.includes(dish.id)}
                />
              ))
            )
          }
        </div>

        <Scrolling 
        direction="prev" 
        onClick={handlePrevDrinkList}
        >
            <FiChevronLeft/>
        </Scrolling>

        <Scrolling 
        direction="next" 
        onClick={handleNextDrinkList}
        >
            <FiChevronRight/>
        </Scrolling>

        </Section>

        </Content>
        )
      }

        
        <Footer/>

    </Container>
  )
}
