import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  width: 100%;
  min-height: 8rem;

  @media(max-width: 819px) {
    display: grid;
    grid-template-areas: 
    "code status date"
    "details details details"
    ;
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    margin-bottom: 2.4rem;
    border-radius: 1rem;

    .status {
    grid-area: status;
    border: none;
    gap: 1rem;
  }

  .code {
    grid-area: code;
    border: none;
  }

  .details {
    grid-area: details;
    text-align: center;
    border: none;
  }

  .date {
    grid-area: date;
    border: none;
  }
}


  
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 2.5rem;
    border: 2px solid ${({ theme }) => theme.COLORS.DARK_1000};
    border-top: none;
    gap: 1.5rem;
    min-width: 15rem;

    p {
      font-size: 4.3rem;
      left: 23%;

      color: ${({ value, theme }) => value === "Preparando" && theme.COLORS.CARROT_100};
      color: ${({ value, theme }) => value === "Pendente" && theme.COLORS.TOMATO_100};
      color: ${({ value, theme }) => value === "Entregue" && theme.COLORS.MINT};
    }

    span {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-weight: 400;
    }

  }

  li:nth-child(2) {
    overflow-x: hidden;
  }

  li:nth-child(3) {
    min-width: 40rem;
    overflow-x: hidden;

    @media (max-width: 820px) {
      min-width: 5rem;
    }
  }

  li {
    display: flex;
    gap: 6rem;
    flex-direction: column;

    font-family: "Roboto", "serif";
    font-size: 1.5rem;
    font-weight: 400;

  }


`