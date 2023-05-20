import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 100%;
  height: 100vh;
  padding: 0 2.4rem;
  gap: 7rem;
  overflow-x: hidden;

  .loader {
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > div {
    max-width: 70rem;
    animation: animateGrow 0.5s ease;
    h1 {
      font-family: "Roboto", "serif";
      font-size: 4.2rem;
    }

    img {
      width: 5rem;
      height: 5rem;
    }
  }

  @media (max-width: 819px) {
    > div {
      display: none;
    }
  }
`;

export const SignUpForm = styled.form`
  width: 100%;
  max-width: 70rem;
  padding: 0 2.4rem;
  margin: 0 auto;
  overflow-x: hidden;
  animation: spinSignUp 0.3s linear;

  > h1 {
    display: none;
  }

  > div:first-child {
    margin-bottom: 7.3rem;

    @media (max-width: 395px) {
      > h1 {
        font-size: 3.4rem;
      }

      img {
        width: 3.5rem;
        height: 3.5rem;
      }
    }

    @media (max-width: 371px) {
      > h1 {
        font-size: 2.8rem;
      }

      img {
        width: 3rem;
        height: 3rem;
      }
    }
  }

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", "serif";
    font-weight: 400;
    font-size: 1.6rem;
  }

  > div {
    margin-top: 2px;
    margin-bottom: 3.2rem;
    padding: 0 1rem;
  }

  > a {
    display: flex;
    justify-content: center;
    margin: 3rem auto;
    max-width: 16.5rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: none;
    background-color: none;

    font-family: "Poppins", "serif";
    font-weight: 500;
    font-size: 1.4rem;
  }

  @media (min-width: 820px) {
    background-color: ${({ theme }) => theme.COLORS.BLACK_700};
    border-radius: 1.6rem;
    padding: 0 7rem;

    > div:first-child {
      display: none;
    }

    h1 {
      display: flex;
      justify-content: center;
      margin-top: 7.4rem;
      margin-bottom: 4.2rem;
      font-family: "Poppins", "serif";
      font-weight: 500;
      font-size: 3.2rem;
    }
  }

  @keyframes spinSignUp {
    0% {
      transform: rotate(180deg);
      opacity: 0;
      scale: 0;
    }

    100% {
      transform: rotate(0);
      opacity: 1;
      scale: 1;
    }
  }
`;
