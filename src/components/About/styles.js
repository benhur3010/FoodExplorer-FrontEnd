import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding-left: 0.6rem;

    max-width: 112rem;
    width: 100%;

    height: 12rem;

    background: linear-gradient(#091E26 0%, #00131C 100%);
    
    margin: 4.4rem auto;

    border-radius: 3px;
    border: none;

    > img {
        position: relative;
        top: -1.5rem;
        left: -2.7rem;
        border: none;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 3px;
        width: clamp(18rem, 21rem, 25rem );
        position: relative;
        right: 1rem;
        margin-right: 1rem;

        h1 {
            font-family: "Poppins", "serif";
            font-weight: 600;
            font-size: 1.8rem;


            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

        p {
            font-family: "Poppins", "serif";
            font-weight: 400;
            font-size: 1.2rem;


            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

    }
        @media(min-width: 650px) {
            > div {
            position: initial;
            width: 100%;
            align-items: center;
        }

        }

        @media(min-width: 820px) {

            height: 20rem;
            display: flex;

            > img {
                position: relative;
                top: -1.8rem;
                left: -2.7rem;
                border: none;

                width: 30rem;
                height: 30rem;
                margin-right: 5rem;
            }

        > div {
            position: initial;
            width: 100%;

            h1 {
                font-weight: 500;
                font-size: 4rem;
            }

            p {
                font-family: "Roboto", "serif";
                font-size: 1.6rem;
            }
        }
    }
`