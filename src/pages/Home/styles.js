<<<<<<< HEAD
import styled from "styled-components";
import { FaGithub, FaSignOutAlt } from "react-icons/fa";
=======
import { FaGithub, FaSignOutAlt } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: var(--dark);

  display: flex;
  justify-content: center;
`;

export const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;
<<<<<<< HEAD
  display: flex;
=======
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
  justify-content: space-between;

  background-color: var(--primary);
  border-bottom: 1px solid var(--darkGray);

  box-shadow: 0px 1px 5px var(--darkGray);
`;

export const Content = styled.div`
  width: 1280px;
  padding-top: 60px;

  display: grid;
  grid-template-columns: 20% 60% 20%;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 10px;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  input[type="file"] {
    display: none;
  }
<<<<<<< HEAD
=======

  label {
    cursor: pointer;
    text-decoration: underline;

    transition: 0.2s;
    :hover {
      color: var(--primary);
    }
  }

>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
  img {
    width: 35%;
    border-radius: 50%;
    user-select: none;
  }

  label {
    cursor: pointer;
    text-decoration: underline;

    transition: 0.2s;
    :hover {
      color: var(--primary);
    }
  }
`;

export const FeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

<<<<<<< HEAD
=======
  gap: 10px;
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
  overflow-y: auto;

  padding: 10px 0px;
`;

export const ActionsContainer = styled.div`
  margin-top: 10px;
<<<<<<< HEAD
=======

  text-align: center;
`;
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18

  text-align: center;
`;
export const QuestionCard = styled.article`
  width: 80%;
  padding: 10px;

  background-color: var(--darkGray);
  border-radius: 4px;

  > header {
    display: flex;
    align-items: center;
    gap: 10px;

    > img {
      width: 30px;
      height: 30px;
      border-radius: 15px;
    }
  }

  > section {
    margin-top: 10px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    > strong {
      font-size: 18px;
    }

    > p {
      font-size: 15px;
      padding: 10px 5px;

      border-left: 2px solid var(--primary);
    }

    > img {
      max-width: 100%;
      align-self: center;
    }
  }

  > footer {
    margin-top: 10px;

    > h1 {
      font-size: 18px;
      font-weight: bold;

      cursor: pointer;

      transition: 0.2s;
<<<<<<< HEAD
      user-select: none;
=======

>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
      :hover {
        color: var(--primary);
      }
    }
<<<<<<< HEAD
    /* > section {
=======

    > section {
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
      margin-top: 10px;
      border-radius: 4px;
      padding: 5px;

      background-color: var(--dark);

      > header {
        display: flex;
        align-items: center;
        gap: 10px;

        > img {
          width: 30px;
          height: 30px;
          border-radius: 15px;
        }
      }

      > p {
        margin-top: 5px;
        width: 100%;
        padding: 10px 5px;

        border-left: 2px solid var(--primary);
      }
    } */
    > form {
      width: 100%;
      margin-top: 5px;

      display: flex;

      gap: 5px;

      > textarea {
        flex: 1;
      }
    }
  }
`;

export const AnswersCard = styled.section`
  margin-top: 10px;
  border-radius: 4px;
  padding: 5px;
  background-color: var(--dark);

  > header {
    display: flex;
    align-items: center;
    gap: 10px;
    > img {
      width: 30px;
      height: 30px;
      border-radius: 15px;
    }

    > form {
      width: 100%;
      margin-top: 5px;

      display: flex;
      gap: 5px;

      > textarea {
        flex: 1;
      }
    }
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;

  margin: 20px;
  margin-top: 40px;
  border-radius: 30px;
  border: 2px solid var(--dark);

  box-shadow: 0px 0px 5px var(--dark);

  cursor: pointer;
  transition: 0.2s;

  :hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px var(--dark);
  }
`;

export const IconSignOut = styled(FaSignOutAlt)`
  font-size: 30px;
  margin-right: 10px;

  cursor: pointer;

  transition: 0.2s;

  :hover {
    color: var(--dark);
  }
`;

export const FormNewQuestion = styled.form`
  min-width: 300px;
  width: 450px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    display: flex;
    flex-wrap: wrap;
  }

  > img {
    align-self: center;
    max-width: 40%;
    display: none;
  }
`;

export const GistIcon = styled(FaGithub)`
  font-size: 30px;
  margin-right: 10px;

  cursor: pointer;

  transition: 0.2s;

  :hover {
    color: var(--primary);
  }

  :active {
    transform: scale(0.9);
  }
`;

const slide = keyframes`
  0%{
    transform: scale(0.1);
  }

  100%{
    transform: scale(1);
  }
`;

export const ContainerGist = styled.section`
  margin-top: 10px;

  animation: ${slide} 0.8s;

  h2 {
    font-size: 16px;
    font-weight: normal;

    text-align: center;
    margin-bottom: 5px;
  }
  > p {
    margin-top: 5px;
    width: 100%;
    padding: 10px 5px;
    border-left: 2px solid var(--primary);
  }
`;

export const Logo = styled.img`
  width: 60px;
  height: 60px;

  margin: 20px;
  margin-top: 40px;
  border-radius: 50%;
  border: 2px solid var(--dark);

  box-shadow: 0px 0px 5px var(--dark);
  cursor: pointer;
  transition: 0.2s;

  :hover {
    transform: scale(1.1);
    box-shadow: 0px 0px 15px var(--dark);
  }
`;

export const IconSignOut = styled(FaSignOutAlt)`
  font-size: 30px;
  margin-right: 10px;
  transition: 0.3;

  cursor: pointer;

  :hover {
    color: var(--dark);
  }
`;

export const FormNewQuestion = styled.form`
  min-width: 300px;
  width: 450px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  > div {
    display: flex;
    flex-wrap: wrap;
  }

  > img {
    align-self: center;
    max-width: 40%;
    display: none;
  }
`;

export const GistIcon = styled(FaGithub)`
  font-size: 30px;
  margin-right: 10px;

  cursor: pointer;

  transition: 0.2s;

  :hover {
    color: var(--primary);
  }

  :active {
    transform: scale(0.9);
  }
`;

export const ContainerGist = styled.section`
  margin-top: 10px;

  h2 {
    font-size: 16px;
    font-weight: normal;
    text-align: center;

    margin-bottom: 5px;
  }
`;
