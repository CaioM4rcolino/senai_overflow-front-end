import Input from "../../components/input";
import { Body, Button, Container, FormLogin, Header } from "./styles";
import { Link, useHistory } from "react-router-dom";

import {api} from "../../services/api"
import { useState } from "react";


function Register() {

  const history = useHistory();

  const [register, setRegister] = useState({
    ra: "", 
    name: "", 
    email: "",
    password: ""
  })

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await api.post("/students", register)

      console.log(response.data);
      history.push("/home");

      
    } catch (error) {
      console.error(error);
      console.log(register);
      alert(error.response.data.error);
    }

  }

  const handleInput = (e) => {

    setRegister({...register, [e.target.id]: e.target.value});
  }

  return (
    <Container>
      <FormLogin onSubmit={handleSubmit}>
        <Header>
          <h1>BEM VINDO AO SENAIOVERFLOW</h1>
          <h2>INFORME SEUS DADOS</h2>
        </Header>
        <Body>
          <Input id="ra" label="RA" type="text" handler={handleInput} />
          <Input id="name" label="Nome" type="text" handler={handleInput} />
          <Input id="email" label="E-mail" type="email" handler={handleInput} />
          <Input id="password" label="Senha" type="password" handler={handleInput} />
          <Input id="valid-password" label="Confirmar senha" type="password" />
          <Button>Entrar</Button>
          <Link to="/">Ou se já tem cadastro clique para entrar</Link>
        </Body>
      </FormLogin>
    </Container>
  );
}

export default Register;
