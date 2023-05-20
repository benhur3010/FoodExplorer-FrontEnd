import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
  margin-top: 2.9rem;
  margin-bottom: 1.8rem;

  > span {
    img {
      width: 10rem;
      height: 10rem;
      border-radius: 50%;
    }
  }

  > main {
    display: flex;
    flex-direction: column;
    align-items: left;
    > div {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      gap: 0.6rem;

      h1 {
        font-family: "Poppins", "serif";
        font-weight: 500;
        font-size: 2.5rem;
        letter-spacing: 0.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }

      h2 {
        font-family: "Poppins", "serif";
        font-weight: 500;
        font-size: 2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }

      span {
        font-family: "Roboto", "serif";
        font-weight: 400;
        font-size: 1.3rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }
    }
  }

  button {
    max-width: 15rem;
    gap: 0.5rem;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    justify-content: left;

    font-family: "Roboto", "serif";
    font-weight: 400;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.COLORS.RED_400};

    svg {
      font-size: 1.6rem;
    }
  }
`;
