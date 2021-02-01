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

function Home() {
  return (
    <Container>
      <Header>
      <Logo src={senaiLogo}/>
      <IconSignOut />
      </Header>
      <Content>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
        <FeedContainer>
          <QuestionCard>
            <header>
              <img src={imgProfile} alt=""/>
              <strong>por Ciclano da Silva</strong>
              <p>em 12/12/2012 as 12:12</p>
            </header>
            <section>
              <strong>Problema com arrays em C#</strong>
              <p>Problema ao declarar valor para índice de array em C#</p>
              <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/120432931/original/0441cd8709f320e21fad391cab0cdb788a530717/solve-your-programming-problems.png" alt=""/>
            </section>
            <footer>
            
              <h1>11 Respostas</h1>
             
              <section>
                <header>
                  <img src={imgProfile} alt=""/>
                  <strong>por Fulano</strong>
                  <p>12/12/2012 as 12:12</p>
                </header>
                <p>Seu índice 1 não é do mesmo tipo que o dado que você quer atribuir</p>
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
          <QuestionCard>
            <header>
              <img src={imgProfile} alt=""/>
              <strong>por Ciclano da Silva</strong>
              <p>em 12/12/2012 as 12:12</p>
            </header>
            <section>
              <strong>Titulo</strong>
              <p>Descrição</p>
              <img src="https://csharpcorner.azureedge.net/UploadFile/BlogImages/02162017013948AM/1.png" alt=""/>
            </section>
            <footer>
            
              <h1>34 Respostas</h1>
             
              <section>
                <header>
                  <img src={imgProfile} alt=""/>
                  <strong>por Fulano</strong>
                  <p>12/12/2012 as 12:12</p>
                </header>
                <p>Resposta para a pergunta.</p>
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
        </FeedContainer>
        <ActionsContainer>
          <button>Fazer uma pergunta</button>
        </ActionsContainer>
      </Content>
    </Container>
  );
}

export default Home;
