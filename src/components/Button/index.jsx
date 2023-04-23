import { Container } from "./styles";

export function Button({ title, icon:Icon, loading, ...rest }) {
    return (
        <Container
        type="button"
        {...rest}
        disabled={loading}
        >   
            {Icon && <Icon/>}
            {title}
        </Container>
    )
}