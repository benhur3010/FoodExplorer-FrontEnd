import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas: "header" "form" "footer";
  grid-template-rows: 11.4rem auto 7.7rem;

  .loader {
    grid-area: form;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
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

export const Form = styled.form`
  grid-area: form;
  padding: 1.1rem 3.2rem;
  width: 100%;
  max-width: 136.6rem;
  margin: 0 auto;
  animation: topdown 0.7s ease;

  @keyframes topdown {
    0% {
      opacity: 0;
      transform: translateY(-50%);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  > button:first-child {
    font-family: "Poppins", "serif";
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
    display: flex;
    align-items: center;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      font-size: 2.3rem;
    }
  }

  > h1 {
    font-family: "Poppins", "serif";
    font-weight: 500;
    font-size: 3.2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin: 2.2rem 0 1.2rem;
  }

  > h2 {
    display: none;
    font-family: "Poppins", "serif";
    font-weight: 500;
    font-size: 3.2rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    margin: 2.2rem 0 1.2rem;
  }

  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
    appearance: textfield;
  }

  main {
    position: relative;

    label {
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
      font-family: "Roboto", "serif";
      font-weight: 400;
      font-size: 1.6rem;
      display: block;

      margin-top: 2.4rem;
      margin-bottom: 1rem;
    }

    input,
    textarea {
      background-color: ${({ theme }) => theme.COLORS.BLACK_800};
      color: ${({ theme }) => theme.COLORS.LIGHT_200};

      font-family: "Roboto", "serif";
      font-weight: 400;
      font-size: 1.6rem;

      border: none;
      width: 100%;
      padding: 1.2rem 3.2rem;
      outline: none;

      border-radius: 8px;
      appearance: none;
      resize: none;
    }

    input {
      height: 4.8rem;
    }

    .buttonSelect {
      background-color: ${({ theme }) => theme.COLORS.BLACK_900};
      border-radius: 8px;
      padding: 1.2rem 3.2rem;

      > select {
        border-radius: 8px;
        width: 100%;

        font-family: "Roboto", "serif";
        font-weight: 400;
        font-size: 1.4rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        background-color: ${({ theme }) => theme.COLORS.BLACK_900};

        border: none;
        outline: none;
        cursor: pointer;
      }
      @media (min-width: 820px) {
        background-color: ${({ theme }) => theme.COLORS.BLACK_800};

        > select {
          background-color: ${({ theme }) => theme.COLORS.BLACK_800};
        }
      }
    }

    .ingredients {
      width: 100%;
      display: flex;
      align-items: center;
      border: none;
      flex-wrap: wrap;
      gap: 1rem;
      background-color: ${({ theme }) => theme.COLORS.BLACK_800};

      border-radius: 8px;

      min-height: 4.8rem;
      padding: 0.8rem;

      div {
        input {
          background: none;
          outline: none;
          border: none;
          padding: 0 0 0 1rem;
          width: clamp(10rem, 12rem, 15rem);

          color: ${({ theme }) => theme.COLORS.LIGHT_100};

          font-family: "Roboto", "serif";
          font-weight: 400;
          font-size: 1.6rem;
        }
      }
    }

    > button:last-child {
      background-color: ${({ theme }) => theme.COLORS.RED_400};
      margin: 2.4rem auto;

      width: 100%;
    }
  }

  @media (min-width: 820px) {
    margin-top: 1rem;
    > button:first-child {
      font-weight: 700;
      font-size: 1.8rem;

      svg {
        font-size: 2.8rem;
      }
    }

    > h1 {
      display: none;
    }

    > h2 {
      display: flex;
    }

    .inputWrapperOne {
      display: flex;
      align-items: center;
      gap: 3.2rem;

      > div:nth-child(2) {
        max-width: 55rem;
        width: 100%;
      }

      > div:nth-child(3) {
        max-width: 42rem;
        width: 100%;
      }
    }

    .inputWrapperTwo {
      display: flex;
      align-items: center;
      gap: 3.2rem;

      > div:nth-child(1) {
        width: 100%;
      }

      > div:nth-child(2) {
        width: 100%;
        max-width: 30rem;
      }
    }

    main {
      padding-bottom: 12rem;
      position: relative;

      > button:last-child {
        position: absolute;
        right: 0;
        bottom: -5%;
        max-width: 25rem;
        margin-bottom: 5rem;
      }
    }
  }
`;

export const UploadImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > input {
    display: none;
  }
  > label:first-child {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-family: "Roboto", "serif";
    font-weight: 400;
    font-size: 1.6rem;
  }

  > label:last-child {
    background-color: ${({ theme }) => theme.COLORS.BLACK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 1.2rem 3.2rem;

    font-family: "Poppins", "serif";
    font-weight: 500;
    font-size: 1.4rem;
    border-radius: 8px;
    margin: 0;

    svg {
      font-size: 2.4rem;
    }

    cursor: pointer;
  }

  @media (min-width: 820px) {
    max-width: 28rem;
  }
`;
