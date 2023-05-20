import styled from "styled-components";

export const Container = styled.div`
  min-width: 24rem;
  max-width: 25rem;
  min-height: 33.5rem;
  max-height: 34.2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BLACK_200};
  border: none;
  border-radius: 8px;
  padding: 0 2.4rem 2.4rem 2.4rem;
  gap: 0.5rem;
  margin-top: 2.4rem;
  margin-right: 1.6rem;
  margin-bottom: 2.4rem;

  :hover {
    transform: scale(1.02);
    transition-duration: 0.4s;
  }

  transform: scale(1);
  transition-duration: 0.4s;

  > button:first-child {
    border: none;
    background: transparent;
    width: 0;
    position: relative;
    top: 2.2rem;
    right: -6rem;

    svg {
      width: 2.6rem;
      height: 2.6rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
    .redHeart {
      color: ${({ theme }) => theme.COLORS.RED_100};
    }
  }

  > button:nth-child(3) {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 0.5rem;
    font-family: "Poppins", "serif";
    font-weight: 700;
    font-size: 1.9rem;
    white-space: nowrap;
  }

  > h2 {
    display: flex;
    flex-wrap: wrap;
    max-width: 17rem;
    width: 100%;
    justify-content: center;

    text-align: justify;

    font-family: "Roboto", "serif";
    font-weight: 400;
    font-size: 1.1rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > span {
    font-family: "Roboto", "serif";
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  }

  > footer {
    margin: 0 auto;
    width: 100%;
    margin-top: 0.5rem;

    div {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: center;
      margin-bottom: 1.5rem;

      button {
        background: none;
        border: none;

        svg {
          color: ${({ theme }) => theme.COLORS.LIGHT_100};
          font-size: 1.8rem;
        }
      }

      span {
        font-family: "Roboto", "serif";
        font-size: 1.6rem;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
      }
    }

    > button {
      height: 3.2rem;
      border-radius: 5px;
      min-width: 16rem;
      width: 100%;
    }
  }

  @media (min-width: 820px) {
    > footer {
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: space-between;

      gap: 1rem;

      padding: 0 0.5rem;

      div {
        margin: 0;
      }

      > button {
        min-width: 7rem;
        max-width: 8rem;
      }
    }

    > span {
      font-size: 2.2rem;
    }
  }
`;

export const DishImage = styled.button`
  background: none;
  border: none;

  > img {
    width: 12rem;
    height: 12rem;

    border-radius: 999px;
  }
`;
