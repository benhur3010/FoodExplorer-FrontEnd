import styled from "styled-components";

export const Container = styled.main`
  display: grid;
  grid-template-areas: "header" "section" "footer";
  grid-template-rows: 11.4rem auto 7.7rem;
  overflow-x: hidden;

  > section {
    margin: 5rem 3rem;
    font-family: "Poppins", "serif";
    font-weight: 500;
    font-size: 3.2rem;
    animation: topdown 0.4s linear;

    .loader {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 5rem auto;
      animation: lowOpacity 0.4s linear;
    }

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    ul {
      overflow: auto;
      max-height: 60vh;
      margin-top: 1rem;
      padding-right: 1rem;
      margin-bottom: 1rem;
      animation: lowOpacity 0.4s linear;

      li {
        > div {
          margin: 2rem;
        }
      }

      ::-webkit-scrollbar {
        background-color: none;
        width: 0.7rem;
      }

      ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
        border-radius: 1rem;
      }
    }

    > footer {
      button {
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;

        max-width: 40%;
        gap: 0.5rem;
        font-size: 1.6rem;
      }
    }
  }

  @media (max-width: 820px) {
    > section {
      ul li {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        padding-right: 2rem;
      }
    }
  }

  @media (max-height: 830px) {
    > section {
      ul li {
        padding-top: 25rem;
        max-height: 35rem;
      }
    }
  }

  @media (max-height: 700px) and (max-width: 820px) {
    > section {
      > ul li {
        padding-top: 28rem;
        max-height: 30rem;
      }
    }
  }

  @media (min-width: 820px) {
    > section {
      margin: 5rem auto;
      padding: 0 3rem;

      > ul li {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        max-width: 136.6rem;
        gap: 2rem;
        color: red;

        flex-wrap: wrap;
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

  @keyframes lowOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
