import styled from "styled-components";

export const Container = styled.footer`
  padding: 0 2.7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7.7rem;
  border: none;
  background-color: ${({ theme }) => theme.COLORS.BLACK_600};
  position: fixed;
  bottom: 0;

  > div {
    display: flex;
    align-items: center;
    gap: 0.4rem;

    img {
      width: 22px;
      height: 18px;
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }

    p {
      font-family: "Roboto", "Serif";
      font-weight: bold;
      font-size: 1.52rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  > span {
    font-family: "DM Sans";
    font-size: 1.2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }

  @media (max-width: 395px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
  }

  @media (min-width: 820px) {
    div {
      img {
        width: 3rem;
        height: 3rem;
      }

      p {
        font-size: 2.4rem;
      }
    }

    > span {
      font-family: "Roboto";
      font-size: 1.4rem;
      font-weight: 400;
    }
  }
`;
