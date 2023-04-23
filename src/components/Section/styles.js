import styled from "styled-components";

export const Container = styled.section`
    grid-area: section;
    font-family: "Poppins", "serif";
    font-weight: 500;
    font-size: 1.8rem;
    max-width: 136.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};
        
    > div {
        display: flex;
        flex-direction: column;
    }

`