import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "header" "body" "footer";
  grid-template-rows: 11.4rem auto 7.7rem;
  height: 100vh;
  overflow-y: auto;

  .spinner {
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    grid-area: body;
    animation: fadeEffect 0.4s linear;
  }
`;

export const MainContent = styled.main`
  grid-area: body;
  padding: 3.6rem 4rem;
  animation: growEffect 0.4s linear;

  > button {
    display: flex;
    align-items: center;
    font-family: "Poppins", "serif";
    font-weight: 500;
    font-size: 2.4rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 3rem;
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 40rem;
    margin: 0 auto;
    text-align: center;

    > img {
      display: flex;
      width: 20.4rem;
      height: 20.4rem;
      margin-top: 2rem;
      border-radius: 50%;

      @media (min-width: 820px) {
        margin-right: 2rem;
      }

      @media (max-height: 700px) {
        width: 16rem;
        height: 16rem;
      }
    }

    h1 {
      font-family: "Poppins", "serif";
      font-weight: 500;
      font-size: 2.7rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    p {
      font-family: "Poppins", "serif";
      font-weight: 400;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      margin-bottom: 2.7rem;
    }

    span {
      max-width: 59rem;
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }

    footer {
      margin-top: 3rem;
      display: flex;
      align-items: center;
      gap: 1.9rem;
      justify-content: center;

      button:nth-child(1),
      button:nth-child(3) {
        border: none;
        background: none;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 2.3rem;
      }

      > span {
        font-family: "Roboto", "serif";
        font-weight: bold;
        font-size: 2.26rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }

      button:last-child {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 7px;
        max-width: 18.8rem;

        font-family: "Poppins", "serif";
        font-weight: 500;
        font-size: 1rem;
        padding: 1rem;

        svg {
          font-size: 2rem;
        }

        @media (max-width: 820px) {
          svg {
            display: none;
          }
        }
      }
    }

    @media (min-width: 820px) {
      display: flex;
      flex-direction: row;
      max-width: 136.6rem;
      justify-content: space-between;
      margin: 4rem auto 0;
      padding: 3.6rem 5rem 0;

      img {
        width: 34rem;
        height: 34rem;
      }

      p {
        text-align: left;
      }

      div {
        display: flex;
        flex-direction: column;
        align-items: start;
      }
    }

    @media (min-height: 800px) {
      gap: 2rem;
    }

    @media (min-width: 1000px) {
      gap: 5rem;

      img {
        width: 37rem;
        height: 37rem;
      }

      h1 {
        font-size: 4rem;
      }

      p {
        font-size: 2.4rem;
      }

      footer {
        margin-top: 4rem;

        button:last-child {
          max-width: 19.2rem;
          font-size: 1.4rem;
          padding: 0 1rem;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    padding: 3.6rem 10rem 0;
  }

  @keyframes growEffect {
    0% {
      opacity: 0;
      scale: 0;
    }

    100% {
      opacity: 1;
      scale: 1;
    }
  }
`;
