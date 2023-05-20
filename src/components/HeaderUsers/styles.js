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
  animation: lowOpacity 0.5s linear;

  @keyframes lowOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const WindowMobile = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > a {
    background: none;
    border: none;
    animation: rightleft 0.7s ease;

    svg {
      width: 2.5rem;
      height: 2.5rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  > nav {
    position: relative;
    display: flex;
    gap: 0.5rem;
    top: -12%;

    background-color: ${({ theme }) => theme.COLORS.BLACK_700};
    animation: leftright 0.7s ease;

    > a {
      z-index: 1;
    }

    ul {
      position: absolute;
      left: 60%;
      top: -70%;
      background-color: ${({ theme }) => theme.COLORS.BLACK_700};
      border-radius: 8px;

      padding: 1rem 2rem;
    }

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
      font-size: 1.6rem;

      margin-bottom: 1.8rem;

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

  > div {
    button {
      background: none;
      border: none;

      svg {
        width: 2.5rem;
        height: 2.5rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    span {
      border: none;
      border-radius: 99px;
      padding: 0 5px;
      height: 22px;

      font-family: "Poppins", "serif";
      font-weight: 500;
      font-size: 1.4rem;

      background-color: ${({ theme }) => theme.COLORS.RED_100};

      position: relative;
      top: -1.8rem;
      left: -1rem;
    }

    @media (max-width: 480px) {
      display: flex;

      span {
        top: -1rem;
      }
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

  > div {
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
`;
