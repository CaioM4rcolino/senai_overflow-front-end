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
import { signOut, getUser } from "../../services/security";
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
        <p>Fulano de tal</p>
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


  const [newAnswer, setNewAnswer] = useState();
  const [display, setDisplay] = useState(false);
  const [answers, setAnswers] = useState(question.Answers);

  const quantityAnswers = answers.length;


    const handleSubmit = async (e) => {
      e.preventDefault();

      try {

        const response = await api.post(`/questions/${question.id}/answers`, {description: JSON.stringify(newAnswer)})

        const student = getUser();

        const addedAnswer = {
          id: response.data.id,
          description: newAnswer,
          created_at: response.data.createdAt,
          Student: {
            id: student.studentId,
            name: student.name
          },

        }

        setAnswers([...answers, addedAnswer]);
        
        setNewAnswer("");

        
      } catch (error) {
        console.error(error);
        alert(error.response.data.error);
      }

    }

    return(
      <QuestionCard>
      <header>
        <img src={imgProfile} alt=""/>
        <strong>por {question.Student.name}</strong>
        <p>em {question.createdAt}</p>
      </header>
      <section>
    <strong>{question.title}</strong>
    <p>{question.description}</p>
        <img src={question.photo} alt=""/>
      </section>
      <footer>
      
        <h1 onClick={() => setDisplay(!display)}>
          
          {quantityAnswers === 0 ? (
            "Seja o Primeiro a responder"
          ) : (
            <>
            {quantityAnswers}
            {quantityAnswers > 1 ? " Respostas" : " Resposta"}
            </>
          )}
        
        
        </h1>
       
        {display && (
        <> 

        {answers.map((a) => <Answer answer={a}/>)}

        </>
        )}
        

       
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Responda essa dúvida!"
            required
            onChange={(e) => setNewAnswer(e.target.value)}
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </footer>
    </QuestionCard>
    );
}

function Answer({answer}){

  return(

    <section>
      <header>
        <img src={imgProfile} alt=""/>
        <strong>por {answer.Student.name}</strong>
      <p>{answer.Student.createdAt}</p>
      </header>
       <p>{answer.description}</p>
    </section>
  );
}

function Home() {

  const history = useHistory();

  const [questions, setQuestions] = useState([])
  

  // const [answers, setAnswers] = useState([])

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
