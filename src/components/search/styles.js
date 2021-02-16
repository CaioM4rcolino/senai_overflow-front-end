import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  padding: 5px;

  > input {
    border: none;
    width: 550px;
    padding: 10px;
    margin-right: 8px;
    border-radius: 10px;
    background-color: #f0f2f5;

    :hover {
      border: 1px solid #1877f2;
    }
  }

  > button {
    color: #988;
    border: 1px solid #988;
    background-color: #ffffff;
  }
`;
