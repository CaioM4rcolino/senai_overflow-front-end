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
    password: "", 
    validPassword: ""
  })
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if(confirmPassword() === false){
        return alert("Senhas incompatíveis!")
      }

        const validatedRegister = {
          ra: register.ra, 
          name: register.name, 
          email: register.email,
          password: register.password, 
        }

        const response = await api.post("/students", validatedRegister);
        
        console.log(response.data);
        
        history.push("/home");
   
    } catch (error) {

      console.error(error);
      console.log(register);
      alert(error.response.data.error);

    }

  }

  const handleInput = (e) => {

    setRegister({...register, [e.target.id]: e.target.value})
   
  }

  const confirmPassword = () => register.password === register.validPassword;

  const enableDisableButton = () => {

    const {ra, name, email, password, validPassword} = register;

    if(!ra || !name || !email || !password || !validPassword || !confirmPassword()){
      return true;
    }
    else{ 
      return false;
    }

  }

  return (
    <Container>
      <FormLogin onSubmit={handleSubmit}>
        <Header>
          <h1>BEM VINDO AO SENAIOVERFLOW</h1>
          <h2>INFORME SEUS DADOS</h2>
        </Header>
        <Body>
          <Input 
          id="ra" 
          label="RA" 
          type="text" 
          handler={handleInput} 
          />

          <Input 
          id="name" 
          label="Nome" 
          type="text" 
          handler={handleInput} />

          <Input 
          id="email" 
          label="E-mail" 
          type="email" 
          handler={handleInput} 
          />
          <Input 
          id="password" 
          label="Senha" 
          type="password" 
          handler={handleInput} 
          />

          <Input 
          id="validPassword" 
          label="Confirmar senha" 
          type="password" 
          // onBlur={(e) => {
          //   if(!confirmPassword())
          //     alert('Senhas incompatíveis!')
          //     e.target.focus()
          // }}
          handler={handleInput}
          />

          <Button disabled={enableDisableButton()}>Entrar</Button>
          <Link to="/">Ou se já tem cadastro clique para entrar</Link>
        </Body>
      </FormLogin>
    </Container>
  );
}

export default Register;
