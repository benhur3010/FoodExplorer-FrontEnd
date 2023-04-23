import styled from "styled-components";

export const Container = styled.button`
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: none;
    background-color: ${({ theme, isActive }) => isActive ? 
    theme.COLORS.LIGHT_700 : 'transparent'};

    font-family: "Poppins", "serif";
    font-weight: 500;
    font-size: 1.4rem;
`