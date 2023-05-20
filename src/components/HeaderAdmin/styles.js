import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  grid-area: header;
  width: 100%;
  height: 11.4rem;
  padding: 0 2.7rem;
  background-color: ${({ theme }) => theme.COLORS.BLACK_700};
  position: fixed;
  z-index: 1;
  animation: lowOpacity 1s linear;
`;

export const WindowMobile = styled.main`
  display: flex;
  align-items: center;
  width: 100%;

  > a {
    background: none;
    border: none;
    animation: rightleft 0.2s ease;

    svg {
      width: 2.5rem;
      height: 2.5rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  > nav {
    display: flex;
    gap: 0.5rem;
    position: absolute;
    top: 40%;
    border-radius: 8px;
    padding-top: 1rem;
    padding-right: 2rem;
    padding-bottom: 1rem;

    background-color: ${({ theme }) => theme.COLORS.BLACK_700};
    animation: leftright 0.7s ease;

    a {
      max-height: 1rem;
    }
    svg {
      font-size: 3rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > ul li a {
      display: flex;
      align-items: center;
      gap: 0.8rem;
      font-family: "Roboto", "serif";
      font-weight: 400;
      font-size: 1.8rem;

      margin-bottom: 1.6rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_300};
      svg {
        font-size: 2rem;
      }
    }
  }

  > header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding-bottom: 5px;
    margin: 0 auto;

    span {
      display: flex;
      align-items: center;
      gap: 8px;

      img {
        width: 2.5rem;
        height: 2.5rem;
      }

      a {
        font-family: "Roboto", "serif";
        font-weight: bold;

        font-size: 2.1rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    p {
      font-family: "Roboto", "serif";
      font-weight: 400;
      font-size: 1.2rem;

      color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    }
  }

  @keyframes leftright {
    0% {
      opacity: 0;
      transform: translateX(-50%);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes rightleft {
    0% {
      opacity: 0;
      transform: translateX(50%);
      animation-delay: 2s;
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export const WindowDesktop = styled.main`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  gap: 1rem;
  max-width: 136.6rem;

  > div:first-child {
    min-width: 18.5rem;
    span {
      display: flex;
      align-items: center;
      gap: 1rem;
      max-width: 50rem;

      img {
        width: 3rem;
        height: 3rem;
      }

      a {
        width: clamp(2rem, 2rem);
        font-family: "Roboto", "serif";
        font-size: clamp(1.6rem, 2.4rem, 2.4rem);
        font-weight: bold;
      }
    }

    p {
      display: flex;
      justify-content: end;
      font-family: "Roboto", "serif";
      font-weight: 400;
      font-size: 1.2rem;

      color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    }
  }

  > div:nth-child(2) {
    width: clamp(22rem, 33rem, 40rem);
  }

  button,
  a {
    display: block;
    font-family: "Roboto", "serif";
    font-weight: 400;
    font-size: clamp(1.4rem, 1.6rem, 1.8rem);
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    svg {
      font-size: 2.4rem;
    }
  }

  a:nth-child(5) {
    width: clamp(15rem, 17rem, 18.7rem);

    font-family: "Poppins", "serif";
    font-weight: 500;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    background-color: ${({ theme }) => theme.COLORS.RED_100};
    height: 4.8rem;

    border: none;
    border-radius: 8px;
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
