import { Container } from "./styles";

export function ButtonText({ title, isActive=false, buttonCard, icon:Icon, ...rest }) {
    return (
        <Container
        type="button"
        isActive={isActive}
        {...rest}
        >   {Icon && <Icon/>}
            {title}
        </Container>
    )
}