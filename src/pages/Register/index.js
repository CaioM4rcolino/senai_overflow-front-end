import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
<<<<<<< HEAD
import Input from "../../components/input";
import Loading from "../../components/Loading";
import { api } from "../../services/api";
import { signIn } from "../../services/security";

import { Body, Button, Container, FormLogin, Header } from "./styles";

function Register() {
  const history = useHistory();
  const [showLoading, setShowLoading] = useState(false);

  const [register, setRegister] = useState({
=======
import Input from "../../components/Input";
import Loading from "../../components/Loading";
import { api } from "../../services/api";
import { signIn } from "../../services/security";
import { Container, FormLogin, Header, Body, Button } from "./styles";

function Register() {
  const history = useHistory();

  const [student, setStudent] = useState({
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
    ra: "",
    name: "",
    email: "",
    password: "",
<<<<<<< HEAD
  });

  const validPassword = () => register.password === confirmPassword;

  const [confirmPassword, setConfirmPassword] = useState("");
  // const [buttonState, setButtonState] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowLoading(true);

    if (confirmPassword !== register.password)
      return alert("Atenção as senhas não colidem");

    try {
      const { ra, name, email, password } = register;
=======
    validPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e) => {
    setStudent({ ...student, [e.target.id]: e.target.value });
  };

  const validPassword = () => student.password === student.validPassword;

  const buttonDisabled = () => {
    const { ra, name, email, password } = student;

    if (!ra || !name || !email || !password || !validPassword()) return true;

    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validPassword()) return alert("As senhas precisam ser iguais!");

    setIsLoading(true);

    try {
      const { ra, name, email, password } = student;
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18

      const response = await api.post("/students", {
        ra,
        name,
        email,
        password,
      });

<<<<<<< HEAD
      console.log(response.data);

      signIn(response.data);

      //Implementar a autorização

      history.push("/home");
      setShowLoading(false);
    } catch (error) {
      console.error(error);

      alert(error.response.data.error);
      setShowLoading(false);
    }
  };
  const handleInput = (e) => {
    setRegister({ ...register, [e.target.id]: e.target.value });
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleButton = (e) => {
    const { ra, name, email, password } = register;

    if (
      !ra ||
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !validPassword()
    )
      return true;
    else return false;
  };

  return (
    <>
      {showLoading && <Loading></Loading>}
=======
      signIn(response.data);

      setIsLoading(false);

      history.push("/home");
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
      <Container>
        <FormLogin onSubmit={handleSubmit}>
          <Header>
            <h1>BEM VINDO AO SENAIOVERFLOW</h1>
<<<<<<< HEAD
            <h2>INFORME SEUS DADOS</h2>
=======
            <h2>INFORME OS SEUS DADOS</h2>
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
          </Header>
          <Body>
            <Input
              id="ra"
              label="RA"
<<<<<<< HEAD
              value={register.ra}
              type="text"
=======
              type="text"
              value={student.ra}
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
              handler={handleInput}
            />
            <Input
              id="name"
              label="Nome"
<<<<<<< HEAD
              value={register.name}
              type="text"
=======
              type="text"
              value={student.name}
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
              handler={handleInput}
            />
            <Input
              id="email"
              label="E-mail"
<<<<<<< HEAD
              value={register.email}
              type="email"
=======
              type="email"
              value={student.email}
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
              handler={handleInput}
            />
            <Input
              id="password"
              label="Senha"
              type="password"
<<<<<<< HEAD
              handler={handleInput}
              value={register.password}
            />
            <Input
              id="validPassword"
              label="Confirmar senha"
              type="password"
              onBlur={(e) => {
                if (!validPassword()) {
                  alert("As senhas precisam ser iguais");
                  e.target.focus();
                }
              }}
              value={confirmPassword}
              handler={handleConfirmPassword}
            />
            <Button disabled={handleButton()}>Entrar</Button>
            <Link to="/">Ou se já tem cadastro clique para entrar</Link>
=======
              value={student.password}
              handler={handleInput}
            />
            <Input
              id="validPassword"
              label="Confirmar Senha"
              type="password"
              onBlur={(e) => {
                if (!validPassword()) alert("As senhas precisam ser iguais");
                e.target.focus();
              }}
              value={student.validPassword}
              handler={handleInput}
            />
            <Button disabled={buttonDisabled()}>Enviar</Button>
            <Link to="/">Ou, se já tem cadastro, clique para entrar</Link>
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
          </Body>
        </FormLogin>
      </Container>
    </>
  );
}

export default Register;
