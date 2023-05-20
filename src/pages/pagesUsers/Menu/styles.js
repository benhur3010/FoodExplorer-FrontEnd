import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  animation: topdown 0.4s linear;
  overflow-x: hidden;
  overflow-y: hidden;
  grid-template-rows: 11.4rem auto 7.7rem;

  .loader {
    display: flex;
    margin: auto;
    animation: lowOpacity 0.4s linear;
  }

  > header {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BLACK_700};
    width: 100%;
    padding-left: 2.5rem;

    button {
      margin-top: 0.6rem;
      svg {
        height: 23px;
        width: 23px;
      }
    }

    h2 {
      font-family: "Roboto", "serif";
      font-weight: 400;
      font-size: 2.1rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;

export const Content = styled.main`
  width: 100%;
  max-width: 136.6rem;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 820px) {
    margin: 0 auto;
  }

  li {
    max-height: 60vh;
    overflow-y: auto;
    margin: 2rem 1rem;
    gap: 1rem;
    animation: topdown 0.4s linear;

    ::-webkit-scrollbar {
      background-color: none;
      width: 0.7rem;
    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
      border-radius: 1rem;
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 20rem;
      gap: 1rem;
      margin: 0 auto;
      margin-bottom: 2rem;

      img {
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
      }

      .ingredients {
        display: flex;
        gap: 1rem;
      }

      h2 {
        text-align: center;
      }
    }

    @media (min-width: 820px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }

  > div {
    margin: 0 2.8rem;
    border-radius: 0.5rem;
  }

  > section {
    gap: 2rem;
    margin: 2rem 2.8rem;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BLACK_1000};
    animation: lowOpacity 0.4s linear;

    button {
      margin-top: 4rem;
      font-family: "Poppins";
      font-weight: 300;
      font-size: 2.4rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    @keyframes lowOpacity {
      0% {
        opacity: 0;
      }

      100% {
        opacity: 1;
      }
    }
  }

  @keyframes topdown {
    0% {
      transform: translateY(-180px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
