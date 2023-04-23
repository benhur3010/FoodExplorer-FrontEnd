import { Container } from "./styles";
import { ButtonText } from "../../components/ButtonText";
import { AiOutlineDelete } from "react-icons/ai";

export function DishFavoritesUsers ({ data, onClick, loading, ...rest }) {

    return (
        <Container {...rest}>
                <span>
                {
                    data.imageDish &&
                    <img 
                    src={data.imageDish} 
                    alt="imagem da refeição" 
                    />
                }

                </span>

                <main>
                    <div>
                        {
                            data.amount &&
                    <h1>
                        {`${data.amount}x`}
                    </h1>
                        }

                    <h2>
                    {data.title}
                    </h2>

                        {
                            data.price && 
                    <span>
                        {`R$: ${data.price}`}
                    </span>
                        }

                    </div>

                    <footer>
                    <ButtonText
                    icon={AiOutlineDelete}
                    title="Remover prato"
                    onClick={onClick}
                    disabled={loading}
                    />
                    </footer>
                </main>               
        </Container>
    )
}