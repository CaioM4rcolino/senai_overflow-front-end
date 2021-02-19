import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Alert from "../../components/Alert";
<<<<<<< HEAD
import Input from "../../components/input";
=======
import Input from "../../components/Input";
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
import Loading from "../../components/Loading";

import { api } from "../../services/api";
import { signIn } from "../../services/security";
<<<<<<< HEAD
import { Body, Button, Container, FormLogin, Header } from "./styles";
=======
import { Container, FormLogin, Header, Body, Button } from "./styles";
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18

function Login() {
  const history = useHistory();

<<<<<<< HEAD
=======
  const [isLoading, setIsLoading] = useState(false);

>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
  const [message, setMessage] = useState(undefined);

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD
    setShowLoading(true);
=======

    setIsLoading(true);

>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
    try {
      const response = await api.post("/sessions", login);

      signIn(response.data);

<<<<<<< HEAD
      //Implementar a autorização

      history.push("/home");
      setShowLoading(false);
    } catch (error) {
      console.error(error);
      setMessage({ title: "Ops...", description: error.response.data.error });
      setShowLoading(false);
=======
      setIsLoading(false);

      history.push("/home");
    } catch (error) {
      console.error(error);
      setMessage({ title: "Ops...", description: error.response.data.error });
      setIsLoading(false);
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
    }
  };

  const handleInput = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

<<<<<<< HEAD
  const [showLoading, setShowLoading] = useState(false);

  return (
    <>
      <Alert message={message} type="error" handleClose={setMessage} />
      {showLoading && <Loading></Loading>}
=======
  return (
    <>
      <Alert message={message} type="error" handleClose={setMessage} />
      {isLoading && <Loading />}
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
      <Container>
        <FormLogin onSubmit={handleSubmit}>
          <Header>
            <h1>BEM VINDO AO SENAIOVERFLOW</h1>
            <h2>O SEU PORTAL DE RESPOSTAS</h2>
          </Header>
          <Body>
            <Input
              id="email"
              label="E-mail"
              type="email"
              value={login.email}
              handler={handleInput}
              required
            />
            <Input
              id="password"
              label="Senha"
              type="password"
              value={login.password}
              handler={handleInput}
              required
            />
            <Button>Entrar</Button>
<<<<<<< HEAD
            <Link to="/register">Ou clique aqui para se cadastrar</Link>
=======
            <Link to="/register"> Ou clique aqui para se cadastrar</Link>
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
          </Body>
        </FormLogin>
      </Container>
    </>
  );
}

export default Login;
