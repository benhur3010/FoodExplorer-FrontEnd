import { Container, Form, UploadImage } from "./styles";

import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/auth";

import { HeaderAdmin } from "../../../components/HeaderAdmin";
import { Footer } from "../../../components/Footer";
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";
import { DishItem } from "../../../components/DishItem";

import { FiChevronLeft, FiUpload } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { toast } from "react-toastify";

export function NewDish () {
  const { isLoading, setIsLoading } = useAuth();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("Refeição");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [image, setImage] = useState(null);
  
  const navigate = useNavigate();

  function handleAddIngredient() {
    if(!newIngredient) {
      return toast.error("Não é possível adicionar o campo vazio.", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
      setIngredients(prevState => [...prevState, newIngredient]);
      setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  function handleClickBack () {
    navigate(-1);
  }
  
  async function handleAddNewDish () {
    const formData = new FormData();

    if(!name || !price || !description || !ingredients || !image){
      return toast.error("Preencha todos os campos para criar o prato.", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    
    if(newIngredient) {
      return toast.error("Você deixou o campo de ingrediente incompleto, finalize ou apague o conteúdo para adicionar o ingrediente.", {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    formData.append("name", name);
    formData.append("category_name", category);
    formData.append("price", price);
    formData.append("ingredients", ingredients);
    formData.append("description", description);
    formData.append("avatar_dish", image);

    try {
      setIsLoading(true);
      await api.post("/dishes", formData);
      setIsLoading(false);
      alert("Prato criado com sucesso!");
      navigate(-1);
      
    } catch (error) {
      toast.error("Não foi possível criar o prato.", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

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
      <Form>
        <ButtonText 
        icon={FiChevronLeft} 
        title="Voltar"
        onClick={handleClickBack}
        />

        <h1>Novo prato</h1>
        <h2>Adicionar prato</h2>
      <main>
      <div className="inputWrapperOne">
        <UploadImage>
        <label>Imagem do prato</label>
        <input 
        type="file" 
        id="imageDish"
        onChange={e => setImage(e.target.files[0])}
        />
        <label htmlFor="imageDish">
          <FiUpload/>
          Selecione imagem
          </label>
        </UploadImage>

        <div>
        <label htmlFor="name">Nome</label>
        <input
        autoComplete="off"
        type="text"
        id="name"
        placeholder="Ex: Salada Caesar"
        onChange={e => setName(e.target.value)}
        accept="image/*"
        />
        </div>

        <div>
        <label htmlFor="category">Categoria</label>
        <div className="buttonSelect">
        <select 
        id="category"
        onChange={e => setCategory(e.target.value)}
        >
        <option value="Refeição">Refeição</option>
        <option value="Bebidas">Bebidas</option>
        <option value="Sobremesas">Sobremesas</option>
        </select>
        </div>
        </div>

      </div>

      <div className="inputWrapperTwo">

      <div>
        <label htmlFor="ingredients">Ingredientes</label>
        <div className="ingredients" id="ingredients">
        {
          ingredients.map((ingredient, index) => (
            <DishItem 
            value={String(ingredient)}
            key={index}
            onClick={() => handleRemoveIngredient(ingredient)}
            />
          ))
        }

        <DishItem 
        placeholder="Adicionar" 
        isNew
        onChange={e => setNewIngredient(e.target.value)}
        value={newIngredient}
        onClick={handleAddIngredient}
        />
        </div>
      </div>
        
      <div>
        <label htmlFor="price">Preço</label>
        <input 
        type="number" 
        placeholder="R$ 00,00"
        onChange={e => setPrice(e.target.value)}
        />

      </div>

      </div>

        <label htmlFor="textarea">Descrição</label>
        <textarea id="textarea" cols="30" rows="7"
        placeholder="Fale brevemente sobre o prato, seus ingredientes e composição."
        onChange={e => setDescription(e.target.value)}
        />
      

      <Button 
      title="Salvar prato"
      onClick={handleAddNewDish}
      />

      </main>
      </Form>
      )
    }

      <Footer/>
    </Container>
  )
}