import { Container, Form, UploadImage } from "./styles";

import { HeaderAdmin } from "../../../components/HeaderAdmin";
import { Footer } from "../../../components/Footer";
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";
import { DishItem } from "../../../components/DishItem";

import { FiChevronLeft, FiUpload } from 'react-icons/fi';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { useAuth } from "../../../hooks/auth";
import { toast } from "react-toastify";
import { ThreeCircles } from "react-loader-spinner";

export function EditDish () {
  const { isLoading, setIsLoading } = useAuth();

  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Refeição");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const params = useParams();

  function handleAddIngredient() {
    if(!newIngredient) {
      return toast.error("Não é possível adicionar campo vazio.", {
        position: toast.POSITION.TOP_RIGHT
      })
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

  async function handleDeleteDish () {
    const confirm = window.confirm("Deseja mesmo excluir o prato ?");

    if(confirm) {
      setIsLoading(true);
      await api.delete(`/dishes/${params.id}`);
      setIsLoading(false);
      navigate("/");
    }
  }

  async function handleSaveDish () {
    const formData = new FormData();

    if(!image) {
      return toast.error("É necessário adicionar uma nova imagem para o prato.", {
        position: toast.POSITION.TOP_RIGHT
      });
    }

    if(!name || !price || !description || !ingredients ){
      return toast.error("Preencha todos os campos para criar o prato.", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
    
    if(newIngredient) {
      return toast.error("Você deixou o campo de ingrediente incompleto, finalize ou apague o conteúdo para adicionar o ingrediente.", {
        position: toast.POSITION.TOP_CENTER
      });
    }

    formData.append("name", name);
    formData.append("category_name", category);
    formData.append("price", price);
    formData.append("ingredients", ingredients);
    formData.append("description", description);
    formData.append("avatar_dish", image);

    try{
      setIsLoading(true);
      await api.put(`/dishes/${params.id}`, formData);
      setIsLoading(false);
      toast.success("Prato atualizado com sucesso.", {
        position: toast.POSITION.TOP_CENTER
      });
      navigate("/");

    } catch (error){
      setIsLoading(false);
      toast.error("Não foi possível atualizar.", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
  }

  useEffect(() => {
    async function fetchDishes () {
      setIsLoading(true);
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
      setIsLoading(false);
    }

    fetchDishes();
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
      <Form>
        <ButtonText 
        icon={FiChevronLeft} 
        title="Voltar"
        onClick={handleClickBack}
        />

        <h1>Editar prato</h1>

      {
        data &&
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
        placeholder={data.name}
        onChange={e => setName(e.target.value)}
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
        {
          data.ingredients &&
        <div className="ingredients" id="ingredients">
          {
            ingredients.map((ingredient, index) => (
              <DishItem
              key={index}
              value={ingredient}
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
        }

      </div>
        
      <div>
        <label htmlFor="price">Preço</label>
        <input 
        type="number" 
        placeholder={`R$ ${data.price}`}
        onChange={e => setPrice(e.target.value)}
        />

      </div>

      </div>

        <label htmlFor="textarea">Descrição</label>
        <textarea 
        id="textarea" 
        cols="30" rows="7"
        placeholder={data.description}
        onChange={e => setDescription(e.target.value)}
        />
      

      <footer>
        <Button 
        title="Excluir prato"
        onClick={handleDeleteDish}
        />

        <Button 
        title="Salvar prato"
        onClick={handleSaveDish}
        />
      </footer>

      </main>
      }
      </Form>
      )
    }

      <Footer/>
    </Container>
  )
}