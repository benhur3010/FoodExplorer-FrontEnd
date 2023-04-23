import { Container } from "./styles";
import logo from "../../assets/polygonTitle.svg"

export function Title() {
    return (
        <Container>
            <img src={logo} alt="imagem do logo" />
            <h1>food explorer</h1>
        </Container>
    )
}