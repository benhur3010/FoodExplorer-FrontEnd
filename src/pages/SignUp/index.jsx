import { Form, Container } from "./styles";

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";

export function SignUp () {
    const { isLoading, setIsLoading } = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isScreenDesktop, setIsScreenDesktop] = useState(false);
    

    async function handleSignUp() {
        if(!name || !email || !password) {
            return toast.error("Preencha todos os campos!", {
                position: toast.POSITION.TOP_RIGHT
            });
        }

        if(password.length < 6) {
            return toast.error("A senha precisa ter no mínimo 6 caracteres.", {
                position: toast.POSITION.TOP_RIGHT
            });
        }

        setIsLoading(true);
        api.post("/users", { name, email, password })
        .then(() => {
            setIsLoading(false);
            toast.success("Conta criada com sucesso!", {
                position: toast.POSITION.TOP_CENTER
            });
            navigate(-1)
        }).catch(error => {
            setIsLoading(false);
            if(error.response){
                toast.error(`${error.response.data.message}`, {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                setIsLoading(false);
                toast.error("Não foi possível cadastrar.", {
                    position: toast.POSITION.TOP_RIGHT
                });
            }
        })

    }

    useEffect(() => {
        const handleWindowResize = () => {
            setIsScreenDesktop(window.innerWidth > 800);
        }

        handleWindowResize();

        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    return (
        <Container>

                <Title/>
                <Form>

                <Title/>
                <h1>Crie sua conta</h1>

                <label htmlFor="name">Seu nome</label>
                <Input
                    id="name"
                    type="text"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    onChange={e => setName(e.target.value)}
                />

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
                title="Criar conta"
                onClick={handleSignUp}
                />

                <Link to="/">Já tenho uma conta</Link>
                </>
                )
                }

                </Form>

        </Container>
    )
}


