import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  max-height: 3.2rem;
  gap: 0.5rem;

  background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.LIGHT_600};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : 'none'};

  > button {
    padding-right: 1rem;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};

    svg {
      font-size: 1.5rem; 
    }
  }

  > input {
    background: none;
    outline: none; 
    border: none;
    padding-left: 1.4rem;

    max-width: 10rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
 
    font-family: "Roboto", "serif";
    font-weight: 400;
    font-size: 1.6rem;

    
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`