import styled from "styled-components";

export const Container = styled.span`
  font-family: "Poppins", "serif";
  font-weight: 500;
  font-size: 1.4rem;
  padding: 4px 8px;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.BLACK_1000};
  border: none;
`;
