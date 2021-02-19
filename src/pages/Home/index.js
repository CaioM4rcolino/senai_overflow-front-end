import { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
<<<<<<< HEAD
import { format, set } from "date-fns";
import ReactEmbedGist from "react-embed-gist";

=======
import { format } from "date-fns";
import ReactEmbedGist from "react-embed-gist";
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
import {
  Container,
  Header,
<<<<<<< HEAD
  IconSignOut,
  Logo,
=======
  Content,
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
  ProfileContainer,
  FeedContainer,
  ActionsContainer,
  QuestionCard,
<<<<<<< HEAD
  AnswersCard,
=======
  Logo,
  IconSignOut,
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
  FormNewQuestion,
  GistIcon,
  ContainerGist,
} from "./styles";

import Input from "../../components/Input";
import imgProfile from "../../assets/foto_perfil.png";
import logo from "../../assets/logo.png";
import { api } from "../../services/api";
import { getUser, setUser, signOut } from "../../services/security";
import Modal from "../../components/Modal";
<<<<<<< HEAD
import Input from "../../components/input/index";
=======
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
import Select from "../../components/Select";
import Tag from "../../components/Tag";
import Loading from "../../components/Loading";
import { validSquaredImage } from "../../utils";
<<<<<<< HEAD
import SpinnerLoading from "../../components/SpinnerLoading";
import InputSearch from "../../components/InputSearch";
=======
import {
  FaGithub,
  FaGithubAlt,
  FaGithubSquare,
  FaReacteurope,
} from "react-icons/fa";
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18

function Profile({ setIsLoading, handleReload, setMessage }) {
  const [student, setStudent] = useState(getUser());

<<<<<<< HEAD
  // useEffect(() => {
  //   setStudent(getUser());
  // }, []);

  const handleImage = async (e) => {
    if (!e.target.files) return;
=======
  const handleImage = async (e) => {
    if (!e.target.files[0]) return;
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18

    try {
      await validSquaredImage(e.target.files[0]);

      const data = new FormData();

      data.append("image", e.target.files[0]);

      setIsLoading(true);

      const response = await api.post(`/students/${student.id}/images`, data);

      setTimeout(() => {
        setStudent({ ...student, image: response.data.image });
        handleReload();
      }, 1000);

      setUser({ ...student, image: response.data.image });
    } catch (error) {
      alert(error);
<<<<<<< HEAD
      console.error(error);
=======
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
      setIsLoading(false);
    }
  };

  return (
    <>
      <section>
<<<<<<< HEAD
        <img
          src={student.image || imgProfile}
          alt="Imagem de perfil"
          title="Foto de Perfil"
        />
=======
        <img src={student.image || imgProfile} alt="Imagem de Perfil" />
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
        <label htmlFor="editImageProfile">Editar Foto</label>
        <input id="editImageProfile" type="file" onChange={handleImage} />
      </section>
      <section>
        <strong>NOME:</strong>
<<<<<<< HEAD
        <p>{student.Name}</p>
=======
        <p>{student.name}</p>
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
      </section>
      <section>
        <strong>RA:</strong>
        <p>{student.ra}</p>
      </section>
      <section>
        <strong>E-MAIL:</strong>
        <p>{student.email}</p>
      </section>
    </>
  );
}

<<<<<<< HEAD
function Question({ question, setIsLoading, setCurrentGist }) {
  const [newAnswer, setNewAnswer] = useState("");
  const [showAnswers, setShowAnswers] = useState(false);

  const [answers, setAnswers] = useState([]);
  // const handleInput = (e) => {
  //   setAnswer(e.target.value);
  // };
=======
function Answer({ answer }) {
  const student = getUser();

  return (
    <section>
      <header>
        <img src={answer.Student.image || imgProfile} alt="Imagem de Perfil" />
        <strong>
          por{" "}
          {student.studentId === answer.Student.id
            ? "Você"
            : answer.Student.name}
        </strong>
        <p> {format(new Date(answer.created_at), "dd/MM/yyyy 'às' HH:mm")}</p>
      </header>
      <p>{answer.description}</p>
    </section>
  );
}

function Question({ question, setIsLoading, setCurrentGist }) {
  const [showAnswers, setShowAnswers] = useState(false);

  const [newAnswer, setNewAnswer] = useState("");

  const [answers, setAnswers] = useState([]);
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18

  useEffect(() => {
    setAnswers(question.Answers);
  }, [question.Answers]);

<<<<<<< HEAD
  const qtdAnwers = answers.length;

  const handleAddAnswer = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (newAnswer < 10)
      return alert("A resposta precisa ter no mínimo 10 caracteres");
=======
  const qtdAnswers = answers.length;

  const handleAddAnswer = async (e) => {
    e.preventDefault();

    if (newAnswer.length < 10)
      return alert("A resposta deve ter no mínimo 10 caracteres");

    setIsLoading(true);
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18

    try {
      const response = await api.post(`/questions/${question.id}/answers`, {
        description: newAnswer,
      });

      const aluno = getUser();

      const answerAdded = {
        id: response.data.id,
        description: newAnswer,
        created_at: response.data.createdAt,
        Student: {
          id: aluno.studentId,
          name: aluno.name,
          image: aluno.image,
        },
      };

      setAnswers([...answers, answerAdded]);

      setNewAnswer("");
<<<<<<< HEAD
      setIsLoading(false);
      // console.log(response);
=======

      setIsLoading(false);
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

<<<<<<< HEAD
  // const showAnswers = () => {
  //   if (show === true) {
  //     // const container = question.Answers.map((a) => <Answer answer={a} />);
  //     // console.log(container);

  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }

  //   // alert(show);
  // };

=======
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
  const student = getUser();

  return (
    <QuestionCard>
      <header>
        <img
          src={question.Student.image || imgProfile}
          alt="Imagem de perfil"
        />
        <strong>
          por{" "}
          {student.studentId === question.Student.id
            ? "Você"
            : question.Student.name}
        </strong>
        <p>
<<<<<<< HEAD
          em {format(new Date(question.created_at), "dd/MM/yyyy 'as' HH:mm")}
=======
          em {format(new Date(question.created_at), "dd/MM/yyyy 'às' HH:mm")}
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
        </p>
        {question.gist && (
          <GistIcon onClick={() => setCurrentGist(question.gist)} />
        )}
      </header>
      <section>
        <strong>{question.title}</strong>
        <p>{question.description}</p>
<<<<<<< HEAD
        {question.image ? (
          <img src={question.image} alt="Imagem da pergunta" />
        ) : (
          ""
        )}
      </section>
      <footer>
        <h1 onClick={() => setShowAnswers(!showAnswers)}>
          {qtdAnwers === 0 ? (
            "Seja o primeiro a responder"
          ) : (
            <>
              {qtdAnwers}
              {qtdAnwers > 1 ? " Respostas" : " Resposta"}
=======
        {question.image && <img src={question.image} alt="Imagem da questão" />}
      </section>
      <footer>
        <h1 onClick={() => setShowAnswers(!showAnswers)}>
          {qtdAnswers === 0 ? (
            "Seja o primeiro a responder"
          ) : (
            <>
              {qtdAnswers}
              {qtdAnswers > 1 ? " Respostas" : " Resposta"}
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
            </>
          )}
        </h1>
        {showAnswers && (
          <>
<<<<<<< HEAD
            {answers.map((a) => (
              <Answer key={answers.id} answer={a} />
            ))}

            {/* <AnswersCard>
          <header>
            <img src={imgProfile} />
            <strong>por </strong>
            <p>12/12/2012 as 12:12</p>
          </header>
          <p>Resposta para a pergunta.</p>
        </AnswersCard> */}

            <form onSubmit={handleAddAnswer}>
              <textarea
                minLength="10"
                placeholder="Responda essa dúvida!"
                onChange={(e) => setNewAnswer(e.target.value)}
                required
                id="answer"
                value={newAnswer}
              ></textarea>
              <button>Enviar</button>
            </form>
          </>
        )}
=======
            {answers.map((answer) => (
              <Answer answer={answer} />
            ))}
          </>
        )}
        <form onSubmit={handleAddAnswer}>
          <textarea
            minLength={10}
            placeholder="Responda essa dúvida!"
            onChange={(e) => setNewAnswer(e.target.value)}
            required
            value={newAnswer}
          />
          <button>Enviar</button>
        </form>
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
      </footer>
    </QuestionCard>
  );
}

<<<<<<< HEAD
function Answer({ answer }) {
  const student = getUser();

  return (
    <AnswersCard>
      <header>
        <img src={answer.Student.image || imgProfile} alt="Imagem de perfil" />
        <strong>
          por{" "}
          {student.studentId === answer.Student.id
            ? "Você"
            : answer.Student.name}
        </strong>
        <p>em {format(new Date(answer.created_at), "dd/MM/yyyy 'as' HH:mm")}</p>
      </header>
      <p>{answer.description}</p>
    </AnswersCard>
  );
}

=======
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
function NewQuestion({ handleReload, setIsLoading }) {
  const [newQuestion, setNewQuestion] = useState({
    title: "",
    description: "",
    gist: "",
  });

  const [categories, setCategories] = useState([]);

  const [categoriesSel, setCategoriesSel] = useState([]);

  const [image, setImage] = useState(null);

  const imageRef = useRef();

  const categoriesRef = useRef();

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await api.get("/categories");

        setCategories(response.data);
      } catch (error) {
        alert(error);
      }
    };

    loadCategories();
  }, []);

  const handleCategories = (e) => {
    const idSel = e.target.value;

    const categorySel = categories.find((c) => c.id.toString() === idSel);

    if (categorySel && !categoriesSel.includes(categorySel))
      setCategoriesSel([...categoriesSel, categorySel]);

    e.target[e.target.selectedIndex].disabled = true;
    e.target.value = "";
  };

  const handleImage = (e) => {
    if (e.target.files[0]) {
      imageRef.current.src = URL.createObjectURL(e.target.files[0]);
      imageRef.current.style.display = "flex";
    } else {
      imageRef.current.src = "";
      imageRef.current.style.display = "none";
    }

    setImage(e.target.files[0]);
  };

  const handleUnselCategory = (idUnsel) => {
    setCategoriesSel(categoriesSel.filter((c) => c.id !== idUnsel));

    const { options } = categoriesRef.current;

<<<<<<< HEAD
    for (let index = 0; index < options.length; index++) {
      if (options[index].value === idUnsel.toString())
        options[index].disabled = false;
    }
  };

  const handleAddNewQuestion = async (e) => {
    e.preventDefault();
    setIsLoading(true);
=======
    for (var i = 0; i < options.length; i++) {
      if (options[i].value === idUnsel.toString()) options[i].disabled = false;
    }
  };

  const handleInput = (e) => {
    setNewQuestion({ ...newQuestion, [e.target.id]: e.target.value });
  };

  const handleAddNewQuestion = async (e) => {
    e.preventDefault();
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18

    const data = new FormData();

    data.append("title", newQuestion.title);
    data.append("description", newQuestion.description);

    const categories = categoriesSel.reduce((s, c) => (s += c.id + ","), "");

    data.append("categories", categories.substr(0, categories.length - 1));

    if (image) data.append("image", image);
    if (newQuestion.gist) data.append("gist", newQuestion.gist);

    setIsLoading(true);

    try {
      await api.post("/questions", data, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
<<<<<<< HEAD
      handleReload();
    } catch (error) {
      alert(error);
      console.error(error);
=======

      handleReload();
    } catch (error) {
      alert(error);
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
      setIsLoading(false);
    }
  };

<<<<<<< HEAD
  const handleInput = (e) => {
    setNewQuestion({ ...newQuestion, [e.target.id]: e.target.value });
  };

=======
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
  return (
    <FormNewQuestion onSubmit={handleAddNewQuestion}>
      <Input
        id="title"
<<<<<<< HEAD
        label="Titulo"
=======
        label="Título"
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
        value={newQuestion.title}
        handler={handleInput}
        required
      />
      <Input
        id="description"
        label="Descrição"
        value={newQuestion.description}
        handler={handleInput}
        required
      />
      <Input
        id="gist"
        label="Gist"
        value={newQuestion.gist}
        handler={handleInput}
      />
      <Select
        id="categories"
        label="Categorias"
        handler={handleCategories}
        ref={categoriesRef}
      >
        <option value="">Selecione</option>
        {categories.map((c) => (
          <option key={c.id} value={c.id}>
            {c.description}
          </option>
        ))}
      </Select>
      <div>
        {categoriesSel.map((c) => (
          <Tag
            key={c.id}
            info={c.description}
            handleClose={() => handleUnselCategory(c.id)}
          ></Tag>
        ))}
      </div>
      <input type="file" onChange={handleImage} />
      <img alt="Pré-visualização" ref={imageRef} />
      <button>Enviar</button>
    </FormNewQuestion>
  );
}

function Gist({ gist, handleClose }) {
  if (gist) {
    const formatedGist = gist.split(".com/").pop();
    return (
      <Modal
        title="Exemplo de código"
        handleClose={() => handleClose(undefined)}
      >
        <ContainerGist>
          <ReactEmbedGist gist={formatedGist} />
        </ContainerGist>
      </Modal>
    );
  } else return null;
}

function Home() {
  const history = useHistory();

<<<<<<< HEAD
  const [isLoading, setIsLoading] = useState(false);

  const [isLoadingFeed, setIsLoadingFeed] = useState(false);

=======
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
  const [questions, setQuestions] = useState([]);

  const [reload, setReload] = useState(null);

<<<<<<< HEAD
=======
  const [isLoading, setIsLoading] = useState(false);

>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
  const [showNewQuestion, setShowNewQuestion] = useState(false);

  const [currentGist, setCurrentGist] = useState(undefined);

<<<<<<< HEAD
  const [search, setSearch] = useState("");

=======
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
  const [page, setPage] = useState(1);

  const [totalQuestions, setTotalQuestions] = useState(0);

<<<<<<< HEAD
  const loadQuestions = async () => {
    //Se já estiver buscando, não busca de novo
    if (isLoadingFeed) return;

    //Se tiver chego no fim, não busca de novo
    if (totalQuestions > 0 && totalQuestions == questions.length) return;

    setIsLoadingFeed(true);
=======
  const feedRef = useRef();

  const loadQuestions = async (reload) => {
    //se já tiver buscando, não busca de novo
    if (isLoading) return;

    //se tiver chego no fim, não busca de novo
    if (totalQuestions > 0 && totalQuestions == questions.length) return;

    setIsLoading(true);

>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
    const response = await api.get("/feed", {
      params: { page },
    });

    setPage(page + 1);

    setQuestions([...questions, ...response.data]);

    setTotalQuestions(response.headers["x-total-count"]);

<<<<<<< HEAD
    setIsLoadingFeed(false);
  };

  useEffect(() => {
    loadQuestions();
=======
    console.log(totalQuestions);

    setIsLoading(false);
  };

  useEffect(() => {
    loadQuestions(true);
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
  }, [reload]);

  const handleSignOut = () => {
    signOut();

    history.replace("/");
  };

  const handleReload = () => {
    setShowNewQuestion(false);
<<<<<<< HEAD
    setIsLoading(false);
    setPage(1);
    setQuestions([]);
    setSearch("");
    setReload(Math.random());
  };

  const feedScrollObserver = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;

    if (scrollTop + clientHeight >= scrollHeight - 100 && search.length < 4)
      loadQuestions();
  };

  const handleSearch = async (e) => {
    setSearch(e.target.value);

    if (e.target.value.length === 0) setReload(Math.random());

    if (e.target.value.length < 4) return;

    try {
      const response = await api.get("/questions", {
        params: { search: e.target.value },
      });

      setQuestions(response.data);
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

=======
    setPage(1);
    setQuestions([]);
    setReload(Math.random());
  };

>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
  return (
    <>
      {isLoading && <Loading />}

      <Gist gist={currentGist} handleClose={setCurrentGist} />

      {showNewQuestion && (
        <Modal
          title="Faça uma pergunta"
          handleClose={() => setShowNewQuestion(false)}
        >
          <NewQuestion
            handleReload={handleReload}
            setIsLoading={setIsLoading}
<<<<<<< HEAD
          ></NewQuestion>
=======
          />
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
        </Modal>
      )}
      <Container>
        <Header>
          <Logo src={logo} onClick={handleReload} />
<<<<<<< HEAD
          <InputSearch handler={handleSearch} value={search} />
=======
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
          <IconSignOut onClick={handleSignOut} />
        </Header>
        <Content>
          <ProfileContainer>
            <Profile handleReload={handleReload} setIsLoading={setIsLoading} />
          </ProfileContainer>
<<<<<<< HEAD
          <FeedContainer onScroll={feedScrollObserver}>
            {questions.length === 0 &&
              search.length > 3 &&
              "Nenhuma questão encontrada"}
            {questions.map((q) => (
              <Question
                key={q.id}
=======
          <FeedContainer ref={feedRef}>
            {questions.map((q) => (
              <Question
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
                question={q}
                setIsLoading={setIsLoading}
                setCurrentGist={setCurrentGist}
              />
            ))}
<<<<<<< HEAD
            {isLoadingFeed && <SpinnerLoading />}
            {totalQuestions > 0 &&
              totalQuestions == questions.length &&
              "Isso é tudo"}
            {/* <button onClick={loadQuestions}>Ver Mais</button> */}
=======
            <button onClick={loadQuestions}>Ver Mais</button>
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
          </FeedContainer>
          <ActionsContainer>
            <button onClick={() => setShowNewQuestion(true)}>
              Fazer uma pergunta
            </button>
          </ActionsContainer>
        </Content>
      </Container>
    </>
  );
}

export default Home;
