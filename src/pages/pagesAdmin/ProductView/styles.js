import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-areas: "top" "center" "bottom"; 
    grid-template-rows: 12rem auto 8rem;

    .spinner {
        display: flex;
        grid-area: center;
        justify-content: center;
        align-items: center;
        height: 65vh;
        animation: fadeTransition 0.5s linear;
    }
`;

export const Body = styled.main`
    grid-area: center;
    padding: 4rem 4.5rem;
    animation: fadeTransition 0.5s linear;

    > button {
        display: flex;
        align-items: center;
        font-family: "Roboto", "serif";
        font-weight: 600;
        font-size: 2.5rem;

        color: ${({ theme }) => theme.COLORS.BRIGHT_300};

        svg {
            color: ${({ theme }) => theme.COLORS.BRIGHT_100};
            font-size: 3.2rem;
        }
    }

    > form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 42rem;
        margin: 0 auto;
        text-align: center;

        > img {
            display: flex;
            width: 22rem;
            height: 22rem;
            margin-right: 2.5rem;

            border-radius: 999px;
   
            margin: 2.5rem auto;
        }

        > div {
            h1 {
                font-family: "Roboto", "serif";
                font-weight: 600;
                font-size: 2.8rem;
                color: ${({ theme }) => theme.COLORS.BRIGHT_300};
            }

            p {
                font-family: "Roboto", "serif";
                font-weight: 400;
                font-size: 1.7rem;
                color: ${({ theme }) => theme.COLORS.BRIGHT_300};
                margin-bottom: 3rem;
            }

            span {
                max-width: 60rem;
                display: flex;
                flex-wrap: wrap;
                gap: 1.2rem;
                justify-content: center;
            }

            button{
                margin-top: 4.5rem;
                border-radius: 6px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                min-width: 15rem;

                font-family: "Roboto", "serif";
                font-weight: 600;
                font-size: 1.5rem;
            }
        }

        @media(min-width: 830px) {
            display: flex;
            flex-direction: row;
            max-width: 138rem;

            margin: 4.5rem auto 0;
            padding: 4rem 5.5rem 0;

            img {
                width: 36rem;
                height: 36rem;
            }

            div {
                display: flex;
                flex-direction: column;
                align-items: start;
                margin: 0 auto;
            }

            button {
                max-width: 14rem;
            }
        }

        @media (min-width: 1010px) {
        gap: 5.5rem;
            
            img {
                width: 38rem;
                height: 38rem;
            }

            div {
                h1 {
                font-size: 4.2rem;
                }

                p {
                    font-size: 2.5rem;
                }


                button{
                    font-size: 1.5rem;
                    padding: 0 1.2rem;
                }
            }

        }
    }

    @keyframes fadeTransition {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    @media(min-width: 1220px) {
            padding: 4rem 11rem 0;
    } 
    
`;
