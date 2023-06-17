import { Container, Body } from "./styles";
import { HeaderAdmin } from "../../../components/HeaderAdmin";
import { Footer } from "../../../components/Footer";
import { ButtonText } from "../../../components/ButtonText";
import { Button } from "../../../components/Button";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FiChevronLeft } from "react-icons/fi";

import { useAuth } from "../../../hooks/auth";
import { api } from "../../../services/api";
import { Ingredients } from "../../../components/Ingredients";

import { ThreeDots } from "react-loader-spinner";

export function ProductView({ ...rest }) {
  const { isLoading, setIsLoading } = useAuth();

  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);

  function handleBackNavigation() {
    navigate(-1);
  }

  function handleEditClick() {
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
  }, []);

  useEffect(() => {
    function fetchImage() {
      if (data) {
        setImage(`${api.defaults.baseURL}/files/${data.avatar_dish}`);
      }
    }

    fetchImage();
  }, [data]);

  return (
    <Container {...rest}>
      <HeaderAdmin />

      {isLoading ? (
        <div className="spinner">
          <ThreeDots color="#126b37" width="120" height="100" />
        </div>
      ) : (
        <Body>
          <ButtonText
            icon={FiChevronLeft}
            title="Return"
            onClick={handleBackNavigation}
          />

          {data && (
            <form>
              <img src={image} alt="Meal Image" />

              <div>
                <h1>{data.name}</h1>

                <p>{data.description}</p>

                {data.ingredients && (
                  <span>
                    {data.ingredients.map(ingredient => (
                      <Ingredients
                        key={String(ingredient.id)}
                        title={ingredient.name}
                      />
                    ))}
                  </span>
                )}

                <Button title="Edit Dish" onClick={handleEditClick} />
              </div>
            </form>
          )}
        </Body>
      )}

      <Footer />
    </Container>
  );
}
