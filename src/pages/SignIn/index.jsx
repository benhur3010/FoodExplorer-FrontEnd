import { Form, Container } from "./styles";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";

import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

export function SignIn () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn, isLoading } = useAuth();

    const [isScreenDesktop, setIsScreenDesktop] = useState(false);

    function handleSignIn() {
        signIn({ email, password })
    }

    useEffect(() => {
        const handleWindowResize = () => {
            setIsScreenDesktop(window.innerWidth > 800);
        }

        handleWindowResize();

        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <Container>

                <Title/>
                <Form>

                <Title/>
                <h1>Faça Login</h1>

                <label htmlFor="email">Email</label>
                <Input
                    id="email"
                    type="text"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    onChange={e => setEmail(e.target.value)}
                />

                <label htmlFor="password">Senha</label>
                <Input
                    id="password"
                    type="password"
                    placeholder="No mínimo 6 caracteres"
                    onChange={e => setPassword(e.target.value)}
                />

            {
                isLoading ?
                (
                <div className="loader">
                    <TailSpin
                    color="#126b37"
                    width="60"
                    height="80"
                    />
                </div>
                )
                :
                (
                <>

                <Button 
                title="Entrar"
                onClick={handleSignIn}
                />

                <Link to="/register">Criar uma conta</Link>
                </>
                )
            }
                </Form>

        </Container>
    )
}


