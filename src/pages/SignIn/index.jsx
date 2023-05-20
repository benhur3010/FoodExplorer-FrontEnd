import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";

import { useAuth } from "../../hooks/auth";

import { Title } from "../../components/Title";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Login } from "./styles";

function SignIn() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const { signIn, isLoading } = useAuth();

  const [isScreenDesktop, setIsScreenDesktop] = useState(false);

  const handleSignIn = () => {
    signIn(credentials);
  };

  const handleInputChange = e => {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value
    });
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setIsScreenDesktop(window.innerWidth > 800);
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Container>
      <Title />
      <Login>
        <Title />
        <h1>Faça seu Login 😊</h1>

        <label htmlFor="email">Email</label>
        <Input
          id="email"
          type="text"
          placeholder="exemplo@email.com.br"
          onChange={handleInputChange}
        />

        <label htmlFor="password">Senha</label>
        <Input
          id="password"
          type="password"
          placeholder="No mínimo 6 caracteres"
          onChange={handleInputChange}
        />

        {isLoading ? (
          <div className="spinner">
            <TailSpin color="#126b37" width="60" height="80" />
          </div>
        ) : (
          <>
            <Button title="Entrar" onClick={handleSignIn} />

            <Link to="/register">Criar uma conta</Link>
          </>
        )}
      </Login>
    </Container>
  );
}

export { SignIn };
