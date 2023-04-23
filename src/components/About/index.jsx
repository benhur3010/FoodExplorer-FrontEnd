import { Container } from "./styles";
import imgAbout from "../../assets/imageAbout.svg";

export function About () {
    return (
        <Container>
            <img src={imgAbout} alt="imagem da tela de entrada" />
            <div>
                <h1>
                    Sabores inigualáveis
                </h1>
                <p>
                    Sinta o cuidado do preparo com ingredientes selecionados.
                </p>
            </div>
        </Container>
    )
}