import { useEffect, useState } from "react";
import { api } from "../../services/api";
import {format} from "date-fns";

import {
  ActionsContainer,
  Container,
  Content,
  FeedContainer,
  Header,
  ProfileContainer,
  QuestionCard,
  Logo,
  IconSignOut,
  FormNewQuestion
} from "./styles";

import imgProfile from "../../assets/foto_perfil.png";
import senaiLogo from  "../../assets/logo.png";
import { signOut, getUser } from "../../services/security";
import { useHistory } from "react-router-dom";
import Modal from "../../components/modal";
import Input from "../../components/input";
import Select from "../../components/select";
import Tag from "../../components/tag";


function Profile() {
  const student = getUser()

  return (
    <>
      <section>
        <img src={imgProfile} alt=""/>
        <a href="a">Editar Foto</a>
      </section>
      <section>
        <strong>NOME:</strong>
        <p>{student.name}</p>
      </section>
      <section>
        <strong>RA:</strong>
        <p>{student.RA}</p>
      </section>
      <section>
        <strong>E-MAIL:</strong>
        <p>{student.email}</p>
      </section>
    </>
  );
}

function Question({question}){


  const [newAnswer, setNewAnswer] = useState();
  const [display, setDisplay] = useState(false);
  const [answers, setAnswers] = useState(question.Answers);

  const student = getUser()

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
        <strong>por {student.studentId === question.Student.id ? "Você" : question.Student.name}</strong>
        <p>em {format(new Date(question.createdAt), "dd/MM/yyyy 'às' HH:mm")}</p>
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
            value={newAnswer}
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </footer>
    </QuestionCard>
    );
}

function Answer({answer}){
  const student = getUser();

  return(

    <section>
      <header>
        <img src={imgProfile} alt=""/>
        <strong>
          por {student.studentId === answer.Student.id ? "Você" : answer.Student.name}
        </strong>
      <p>{format(new Date(answer.Student.created_at), "dd/MM/yyyy 'às' HH:mm")}</p>
      </header>
       <p>{answer.description}</p>
    </section>
  );
}

function NewQuestion(){

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    const loadCategories = async () => {

      try {
        
        const response = await api.get("/categories");
        setCategories(response.data);

      } catch (error) {
        alert(error);
        console.error(error);
      }

    }

    loadCategories();

  }, [])

  return( 
    <FormNewQuestion>
      <Input id="title" label="Título"/>
      <Input id="description" label="Descrição"/>
      <Input id="gist" label="Gist"/>
      <Select id="categories" label="Categorias">
        <option value="">
          Selecione
        </option>
        {categories.map((c) => (
          <option value={c.id}>{c.description}</option>
        ))}
      </Select>
      <div>
      <Tag value="Back-end"/>
      <Tag value="Front-end"/>
      <Tag value="Arquitetura de softwares"/>
      <Tag value="Testes de unidade"/>
      <Tag value="Hardware"/>

      </div>
      <input type="file"/>
      <button>Enviar</button>
   </FormNewQuestion>
  );
}

function Home() {

  const history = useHistory();

  const [questions, setQuestions] = useState([])

  // const [reload, setReload] = useState(null)
  

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

  // const handleReload = () => {
  //   setReload(Math.random())
  // }

  return (
  <>
    <Modal title="Faça uma pergunta">
      <NewQuestion/>
    </Modal>
    <Container>
      <Header>
      {<Logo /* onClick={handleReload} */ src={senaiLogo}/>}
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
  </>
  );
}

export default Home;
