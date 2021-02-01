import Input from "../../components/input";
import { Body, Button, Container, FormLogin, Header } from "./styles";
import { Link, useHistory } from "react-router-dom";

function Login() {

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push("/home");
  }

  return (
    <Container>
      <FormLogin onSubmit={handleSubmit}>
        <Header>
          <h1>BEM VINDO AO SENAIOVERFLOW</h1>
          <h2>O SEU PORTAL DE RESPOSTAS</h2>
        </Header>
        <Body>
          <Input id="email" label="E-mail" type="email" required/>
          <Input id="password" label="Senha" type="password" required/>
          <Button>Entrar</Button>
          <Link to="/register">Ou clique aqui para se cadastrar</Link>
        </Body>
      </FormLogin>
    </Container>
  );
}

export default Login;
