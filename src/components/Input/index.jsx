import { Container } from "./styles";

export function Input({ icon: Icon, type, ...rest }) {
    return (
        <Container>
            {Icon && <Icon size={19.5}/>}
            <input {...rest}
            autoComplete="off"
            type={type}
            />
        </Container>
    )
}