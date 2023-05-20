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
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.main`
  grid-area: main;
  width: 100%;
  padding: 0 1.6rem;
  margin: 0 auto;
  overflow: auto;
  animation: leftRight 0.4s ease;
  overflow-x: hidden;

  > section {
    position: relative;
    margin: 0 auto;
    max-width: 120rem;
    animation: lowOpacity 0.4s linear;

    > div {
      p {
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        height: 35.5rem;

        @media (max-width: 820px) {
          font-size: 1.4rem;
          font-family: 500;
          min-width: 20rem;
        }
      }

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
  height: 33.5rem;
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  font-size: 3.5rem;
  background: ${({ theme }) => theme.COLORS.BLACK_200};
  box-shadow: 0 0 3px 3px ${({ theme }) => theme.COLORS.BLACK_200};

  ${({ direction }) =>
    direction === "prev"
      ? `
        left: -2rem;
    `
      : `
        right: -2rem;
    `}

  @media (max-width: 820px ) {
    ${({ direction }) =>
      direction === "prev"
        ? `
        left: -2rem;
    `
        : `
        right: -2rem;
    `}
  }

  :hover {
    transition: 0.3s;

    background-color: ${({ theme }) => theme.COLORS.BLACK_200};
    box-shadow: 0 0 3px 3px ${({ theme }) => theme.COLORS.BLACK_800};
    filter: opacity(0.9);
  }

  @keyframes leftRight {
    0% {
      transform: translateX(-360px);
    }

    100% {
      transform: translateX(0);
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
