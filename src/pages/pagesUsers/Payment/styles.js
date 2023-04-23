import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-areas: "header" "content" "footer";
    grid-template-rows: 11.4rem auto 7.7rem;
    overflow-x: hidden;

    .loader {
        display: flex;
        align-items: center;
        justify-content: center;
        grid-area: content;
        margin: auto;
        animation: lowOpacity 0.5s linear;
        height: 70vh;
    }
`

export const Content = styled.main`
    width: 100%;
    grid-area: content;
    display: flex;
    max-width: 136.6rem;
    margin: 5.6rem auto 0;
    gap: 2rem;
    animation: lowOpacity 0.5s linear;

    > section {
        margin: 0 auto;
        font-family: "Poppins", "serif";
        font-weight: 500;
        font-size: 3.2rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        padding: 0 3rem;
        
        @media(max-width: 820px) {
            padding: 0 3rem;
        }

        .paymentFinalize {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 4rem 3rem;
            min-width: 30rem;

            border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
            border-bottom-left-radius: 0.8rem;
            border-bottom-right-radius: 0.8rem;
            animation: lowOpacity 0.5s linear;

            svg {
                width: 9.6rem;
                height: 9.6rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_500};
            }

            p {
                margin: 2.4rem auto;
                font-family: "Roboto", "serif";
                font-weight: bold;
                font-size: 2rem;

                color: ${({ theme }) => theme.COLORS.LIGHT_400};
            }
        }

        main {
            margin: 4rem auto 5rem;
            max-width: 50rem;
            display: flex;
            flex-direction: column;
            width: 100%;
            animation: lowOpacity 0.5s linear;


            img {
                border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
                padding: 4rem;
                min-width: 20rem;
                max-width: 40rem;
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;
                animation: rotateRight 0.3s ease;

                @media (min-width: 820px) {
                    padding: 8rem;
                }
            }
            
            div {
                display: flex;
                width: 100%;
                font-family: "Roboto";
                font-weight: 400;
                font-size: 1.6rem;

                button:first-child {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
                    width: 100%;
                    height: 8rem;
                    border-top-left-radius: 8px;
                    font-family: "Roboto";
                    font-weight: 400;
                    font-size: 1.6rem;
                }

                button:nth-child(2) {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
                    width: 100%;
                    height: 8rem;
                    border-top-right-radius: 8px;
                    font-family: "Roboto";
                    font-weight: 400;
                    font-size: 1.6rem;
                }
            }}

        @keyframes lowOpacity {
            0% {
                opacity: 0;
            }

            100% {
                opacity: 1;
            }
    }
}
`

export const Request = styled.div`
    margin: 0 auto;
    padding-left: 1rem;
    position: relative;
    
    > ul {
        max-height: 50vh;
        overflow: auto;
        margin-bottom: 2rem;
        padding-right: 1.5rem;

        ::-webkit-scrollbar {
            background-color: none;
            width: 0.7rem;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
            border-radius: 1rem;

        }
    }

    > h1 {
        font-family: "Poppins", "serift";
        font-weight: 500;
        font-size: 3.2rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        margin-bottom: 1rem;
    }

    > span {
        font-family: "Poppins", "serif";
        font-weight: 500;
        font-size: 2rem;

        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    > button {
        max-width: 25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin: 2rem auto;

        svg {
            font-size: 2rem;
        }
    }
`

export const Form = styled.form`
    grid-area: form;
    display: flex;
    flex-direction: column;
    padding: 5.7rem 3rem;
    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;
    animation: rotateLeft 0.3s ease;

    > label {
        font-family: "Roboto", "serif";
        font-weight: 400;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        margin-bottom: 0.5rem;
    }

    > div {
        display: flex;
        gap: 2.5rem;

        label {
        font-family: "Roboto", "serif";
        font-weight: 400;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        margin-top: 3rem;
    }
        
        div {
           display: flex;
           flex-direction: column;
           gap: 0.5rem;
        }
    }

    > button {
        margin: 3rem 0 0 0;
        border: transparent;
    }

    @keyframes rotateRight{
        0% {
            transform: rotate(-180deg);
            opacity: 0;
            scale: 0;
        }

        100% {
            transform: rotate(0);
            opacity: 1;
            scale: 1;
        }
    }

    @keyframes rotateLeft{
        0% {
            transform: rotate(180deg);
            opacity: 0;
            scale: 0;
        }

        100% {
            transform: rotate(0);
            opacity: 1;
            scale: 1;
        }
    }
`