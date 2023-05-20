import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "header" "main" "footer";
  grid-template-rows: 11.4rem auto 7.7rem;

  @media (max-width: 399px) {
    > main {
      section {
        max-width: 35rem;
        width: 100%;
      }
    }
  }

  @media (min-width: 400px) {
    > main {
      section {
        max-width: 40rem;
        width: 100%;
      }
    }
  }

  @media (min-width: 500px) {
    > main {
      section {
        max-width: 50rem;
        width: 100%;
      }
    }
  }

  @media (min-width: 820px) {
    > main {
      section {
        max-width: 68rem;
        width: 100%;
      }
    }
  }

  @media (min-width: 1000px) {
    > main {
      section {
        max-width: 78rem;
        width: 100%;
      }
    }
  }

  @media (min-width: 1100px) {
    > main {
      section {
        max-width: 88rem;
        width: 100%;
      }
    }
  }

  @media (min-width: 1366px) {
    > main {
      section {
        max-width: 120rem;
        width: 100%;
      }
    }
  }

  .loader {
    grid-area: main;
    display: flex;
    margin: auto;
    align-items: center;
    justify-content: center;
    height: 60vh;
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
  grid-area: main;

  width: 100%;
  padding: 0 1.6rem;
  margin: 0 auto;
  overflow: auto;
  overflow-x: hidden;
  animation: leftright 0.7s ease;

  @keyframes leftright {
    0% {
      opacity: -2;
      transform: translateX(-50%);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  > section {
    white-space: nowrap;
    margin: 0 auto;
    max-width: 120rem;

    position: relative;

    > div {
      p {
        margin: 0 auto;
        height: 35.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;

        @media (max-width: 820px) {
          font-size: 1.4rem;
          font-family: 500;
          min-width: 20rem;
        }
      }

      white-space: nowrap;
      display: flex;
      align-items: center;
      overflow-x: hidden;
      flex-direction: row;

      scroll-behavior: smooth;
      scroll-snap-type: x mandatory;
    }
  }
`;

export const Scrolling = styled.button`
  position: absolute;
  top: 53.5%;
  transform: translateY(-50%);
  border: none;
  filter: opacity(0.7);
  height: 31rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 3.5rem;
  z-index: 0.5;
  box-shadow: 0 0 3px 3px ${({ theme }) => theme.COLORS.BLACK_200};
  background-color: ${({ theme }) => theme.COLORS.BLACK_200};

  ${({ direction }) =>
    direction === "prev"
      ? `
        left: -2rem;
    `
      : `
        right: -2rem;
    `}

  :hover {
    filter: opacity(0.9);
    transition: 0.3s;

    box-shadow: 0 0 3px 3px ${({ theme }) => theme.COLORS.BLACK_800};
    background-color: ${({ theme }) => theme.COLORS.BLACK_400};
  }
`;
