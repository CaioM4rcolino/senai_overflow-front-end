import { useEffect, useState, useRef } from "react";
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
import Loading from "../../components/loading";



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

function Question({question, setLoading}){


  const [newAnswer, setNewAnswer] = useState();
  const [display, setDisplay] = useState(false);
  const [answers, setAnswers] = useState([]);


  useEffect(() => {

    setAnswers(question.Answers)

  }, [question.Answers])

  const student = getUser()

  const quantityAnswers = answers.length;


    const handleSubmit = async (e) => {
      e.preventDefault();

      try {

        setLoading(true)
        const response = await api.post(`/questions/${question.id}/answers`, {description: JSON.stringify(newAnswer)})
        setLoading(false)

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
        alert(error);
        setLoading(false)

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
      <p>{format(new Date(answer.created_at), "dd/MM/yyyy 'às' HH:mm")}</p>
      </header>
       <p>{answer.description}</p>
    </section>
  );
}

function NewQuestion({handleReload, setLoading}){

  const [categories, setCategories] = useState([]);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const [image, setImage] = useState(null);

  const categoriesRef = useRef();

  const [newQuestion, setNewQuestion] = useState({
    title: "",
    description: "",
    gist: "",
  });



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

  const handleCategories = (e) => {

    const idCategory = e.target.value;
    
    const categoryValue = categories.find((c) => c.id.toString() === idCategory)

    if(categoryValue && !selectedCategories.includes(categoryValue))
      setSelectedCategories([...selectedCategories, categoryValue]);

    e.target[e.target.selectedIndex].disabled = true;
    e.target.value = "";

  };

  const handleRemoveTag = (categoryId) => {

    setSelectedCategories(selectedCategories.filter((c) => c.id !== categoryId))

    const options = categoriesRef.current;

    for(var i = 0; i < options.length; i++){
      if(options[i].value === categoryId.toString()){
          options[i].disabled = false;
      }
    }
    

  }

  const handleImage = (e) => {

    setImage(e.target.files[0]);

  }

  const handleAddNewQuestion = async (e) => {
    e.preventDefault();

      setLoading(true);

      const data = new FormData();

      data.append("title", newQuestion.title)
      data.append("description", newQuestion.description)

      

      const categories = selectedCategories.reduce((string, category) => (string += category.id + ","), "")

      data.append("categories", categories.substr(0, categories.length - 1))

      if(newQuestion.gist)
       data.append("gist", newQuestion.gist)

      if(image) 
        data.append("photo", image)

      try {
        
        await api.post("/questions", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        setLoading(false)
        handleReload()

      } catch (error) {
        alert(error)
        console.error(error);
      }

  }

  const handleInput = (e) => {

    setNewQuestion({...newQuestion, [e.target.id]: e.target.value})
   
  }


  return( 
  
    <FormNewQuestion onSubmit={handleAddNewQuestion}>
      <Input id="title" label="Título" value={newQuestion.title} handler={handleInput} required/>
      <Input id="description" label="Descrição" value={newQuestion.description} handler={handleInput} required/>
      <Input id="gist" label="Gist" value={newQuestion.gist} handler={handleInput}/>
      <Select 
      id="categories" 
      label="Categorias" 
      handler={handleCategories} 
      ref={categoriesRef}>

        <option value="">Selecione uma categoria</option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>{c.description}</option>
        ))}

      </Select>
      <div>
        
      {selectedCategories.map((c) => (
            <Tag handleClose={() => handleRemoveTag(c.id)} value={c.description}/>
        ))}
     

      </div>
      <input type="file" onChange={handleImage}/>

      {
        image && (
          <img 
          src={image ? URL.createObjectURL(image) : ""} 
          alt="preview" 
          />
        )
      }
  
      <button>Enviar</button>
   </FormNewQuestion>

  );
}

function Home() {

  const history = useHistory();

  const [questions, setQuestions] = useState([])

  const [showModal, setShowModal] = useState(false);

  const [reload, setReload] = useState(null)

  const[loading, setLoading] = useState(false);

  

  // const [answers, setAnswers] = useState([])
   
  useEffect(() => {
    const loadQuestions = async () => {
    
      setLoading(true)

        const response = await api.get("/feed")
        setQuestions(response.data);

        setLoading(false)

        
  
    }

    loadQuestions();

  }, [reload])

  const handleSignOut = () =>{

    signOut();
    history.replace("/")
  }

 
  const handleReload = () => {

      setShowModal(false)
      
      setReload(Math.random())

  }


  return (
  <>
   {loading && (
      <Loading/>
    )}

    {showModal && (
       <Modal handleClose={() => setShowModal(false)} title="Faça uma pergunta">
          <NewQuestion setLoading={setLoading} handleReload={handleReload}/>
       </Modal>
    )}
   
    <Container>
      <Header>
      {<Logo onClick={handleReload} src={senaiLogo}/>}
       <IconSignOut onClick={handleSignOut}/>
      </Header>
      <Content>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <FeedContainer>

          {questions.map((q) => <Question setLoading={setLoading} question={q}/>)}
         
        </FeedContainer>
        <ActionsContainer>
          <button onClick={() => setShowModal(true)}>Fazer uma pergunta</button>
        </ActionsContainer>
      </Content>
    </Container>
  </>
  );
}

export default Home;
