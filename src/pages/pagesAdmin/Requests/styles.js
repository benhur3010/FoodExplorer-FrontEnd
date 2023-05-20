import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: "header" "content" "footer";
  height: 100vh;

  .loader {
    grid-area: content;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    animation: lowOpacity 0.4s linear;
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

export const Content = styled.main`
  grid-area: content;
  padding: 2rem 3rem;
  text-align: start;
  width: 100%;
  max-width: 136.6rem;
  animation: increaseSize 0.7s ease;

  @keyframes increaseSize {
    0% {
      opacity: 0;
      scale: 0;
    }

    100% {
      opacity: 1;
      scale: 1;
    }
  }

  @media (min-width: 820px) {
    margin: 0 auto;
  }

  > button:first-child {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.7rem;
  }

  > section {
    position: relative;
    max-width: 136.6rem;
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-family: "Poppins", "serif";
    font-size: 3.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-top: 2rem;

    > form {
      width: 100%;
      display: grid;
      margin-top: 2rem;
      max-height: 47rem;
      overflow-y: auto;

      ::-webkit-scrollbar {
        background-color: none;
        width: 0.7rem;
      }

      ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
        border-radius: 1rem;
      }

      nav {
        display: flex;
        justify-content: space-between;
        width: 100%;

        span {
          width: 100%;
          display: inline;
          font-size: 1.5rem;
          font-weight: bold;
          font-family: "Roboto", "serif";
          color: ${({ theme }) => theme.COLORS.LIGHT_300};
          border: 2px solid ${({ theme }) => theme.COLORS.BLACK_1000};
          padding: 2.5rem;
        }

        > span:nth-child(1) {
          border-top-left-radius: 1rem;
          min-width: 15rem;
        }

        > span:nth-child(3) {
          min-width: 40rem;
        }

        > span:nth-child(4) {
          border-top-right-radius: 1rem;
        }
      }

      ul {
        li {
          border: 2px solid ${({ theme }) => theme.COLORS.BLACK_1000};
          border-top: none;
          width: 100%;
          padding: 2.5rem;

          @media (max-width: 820px) {
            border: none;
          }
        }
      }
    }
  }

  > span {
    font-family: "Poppins", "serif";
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > button:last-child {
    margin-top: 5rem;
    margin: 5rem auto 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: clamp(15rem, 25rem, 27rem);

    svg {
      font-size: 1.8rem;
    }
  }
`;
