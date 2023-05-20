import styled from "styled-components";

export const Container = styled.div`
  min-width: 21rem;
  height: 31.5rem;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BLACK_200};
  border: none;
  border-radius: 8px;
  padding: 0 2.4rem 2.4rem 2.4rem;
  gap: 1.2rem;
  margin-top: 2.4rem;
  margin-right: 1.6rem;
  margin-bottom: 2.4rem;

  :hover {
    transform: scale(1.03);
    transition-duration: 0.4s;
  }

  transform: scale(1);
  transition-duration: 0.4s;

  > button:first-child {
    border: none;
    background: none;
    position: absolute;
    top: 2rem;
    right: 2rem;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      width: 2.4rem;
      height: 2.4rem;
    }
  }

  .favorite {
    border: none;
    background: none;
    position: absolute;

    top: 2rem;
    left: 2rem;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      width: 2.4rem;
      height: 2.4rem;
    }

    .redHeart {
      color: ${({ theme }) => theme.COLORS.RED_100};
    }
  }

  > button:nth-child(4) {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    gap: 0.5rem;
    font-family: "Poppins", "serif";
    font-weight: 700;
    font-size: 1.8rem;
    white-space: nowrap;
  }

  > span {
    font-family: "Roboto", "serif";
    font-weight: 400;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};

    margin-bottom: 3rem;
  }

  @media (min-width: 900px) {
    min-width: 23rem;
  }
`;

export const DishImage = styled.button`
  background: none;
  border: none;
  margin: 3rem auto 0;

  > img {
    width: 13rem;
    height: 13rem;

    border-radius: 999px;
  }
`;
