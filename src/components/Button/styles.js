import styled from "styled-components";

export const Container = styled.button`
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 100%;
    max-width: 110rem;
    height: 4.8rem;

    border: none;
    border-radius: 8px;

    font-family: "Poppins";
    font-weight: 500;
    font-size: 1.4rem;
`