import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 11.4rem auto 7.7rem;
  grid-template-areas: "header" "body" "footer";
`;

export const Body = styled.main`
  grid-area: body;
  max-width: 136.6rem;
  width: 100%;
  margin: 0 auto;
  padding: 5rem;
  animation: slideIn 0.4s linear;
  position: relative;

  > button:first-of-type {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.7rem;
  }

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-family: "Poppins", "serif";
    font-size: 3.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    margin-top: 3rem;

    ul {
      max-height: 55vh;
      overflow: auto;
      margin-bottom: 2rem;
      padding-right: 1rem;

      ::-webkit-scrollbar {
        background-color: none;
        width: 0.7rem;
      }

      ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
        border-radius: 1rem;
      }

      @media (max-width: 600px) {
      }

      @media (min-width: 820px) {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 2rem;
        flex-wrap: wrap;
      }

      li {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 3rem;
        padding: 1rem;

        @media (max-width: 820px) {
          display: flex;
          flex-direction: column;
        }
      }

      p {
        margin: 5rem auto;
      }
    }
  }

  > span {
    font-family: "Poppins", "serif";
    font-weight: 500;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }

  > button:last-of-type {
    position: absolute;
    right: 7%;
    bottom: 5%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: clamp(13rem, 15rem, 22rem);

    @media (min-width: 820px) {
      width: 20rem;
    }
    svg {
      font-size: 1.8rem;
    }
  }

  @keyframes slideIn {
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
