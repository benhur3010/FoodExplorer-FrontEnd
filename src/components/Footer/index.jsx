import { Container } from "./styles";
import logo  from "../../assets/polygonFooter.svg"

export function Footer () {
    return (
        <Container>
            <div>
                <img src={logo} alt="logo do restaurante no footer" />
                <p>food explorer</p>
            </div>

            <span>&copy; 2023 - Todos os direitos reservados.</span>
        </Container>
    )
}