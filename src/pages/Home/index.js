import { useEffect, useState } from "react";
import { api } from "../../services/api";

import {
  ActionsContainer,
  Container,
  Content,
  FeedContainer,
  Header,
  ProfileContainer,
  QuestionCard,
  Logo,
  IconSignOut
} from "./styles";

import imgProfile from "../../assets/foto_perfil.png";
import senaiLogo from  "../../assets/logo.png";
import { signOut } from "../../services/security";
import { useHistory } from "react-router-dom";

function Profile() {
  return (
    <>
      <section>
        <img src={imgProfile} alt=""/>
        <a href="a">Editar Foto</a>
      </section>
      <section>
        <strong>NOME:</strong>
        <p>Fulano de Tal</p>
      </section>
      <section>
        <strong>RA:</strong>
        <p>1234567</p>
      </section>
      <section>
        <strong>E-MAIL:</strong>
        <p>fulano@gmail.com</p>
      </section>
    </>
  );
}

function Question({question}){
    return(
      <QuestionCard>
      <header>
        <img src={imgProfile} alt=""/>
        <strong>por {question.Student.name}</strong>
        <p>em {question.created_at}</p>
      </header>
      <section>
    <strong>{question.title}</strong>
    <p>{question.description}</p>
        <img src="https://csharpcorner.azureedge.net/UploadFile/BlogImages/02162017013948AM/1.png" alt=""/>
      </section>
      <footer>
      
        <h1>34 Respostas</h1>
       
        <section>
          <header>
            <img src={imgProfile} alt=""/>
            <strong>por </strong>
            <p>12/12/2012 as 12:12</p>
          </header>
          <p>Classes estáticas não precisam ser instanciadas. Basta usar os métodos direto.</p>
        </section>
        <form>
          <textarea
            placeholder="Responda essa dúvida!"
            required
          ></textarea>
          <button>Enviar</button>
        </form>
      </footer>
    </QuestionCard>
    );
}

function Home() {

  const history = useHistory();

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    const loadQuestions = async () => {

      const response = await api.get("/feed")
      setQuestions(response.data);

    }

    loadQuestions();

  }, [])

  const handleSignOut = () =>{

    signOut();
    history.replace("/")
  }

  return (
    <Container>
      <Header>
      <Logo src={senaiLogo}/>
       <IconSignOut onClick={handleSignOut}/>
      </Header>
      <Content>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <FeedContainer>
          {questions.map((q) => <Question question={q}/>)}
        
         
        </FeedContainer>
        <ActionsContainer>
          <button>Fazer uma pergunta</button>
        </ActionsContainer>
      </Content>
    </Container>
  );
}

export default Home;
