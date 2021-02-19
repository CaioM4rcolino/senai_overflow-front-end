import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
  margin-top: 15px;

  > input {
    border: 0;
    padding-left: 10px;
    border-radius: 3px;
<<<<<<< HEAD
    font-family: sans-serif;
    
=======

    font-family: sans-serif;
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
  }

  > label {
    position: absolute;
<<<<<<< HEAD
    top: 0;
    left: 10px;
    color: var(--darkGray);
    display: flex;
    align-items: center;
    cursor: text;
    transition: 0.2s ease-in-out;
=======
    left: 10px;
    top: 0px;
    display: flex;
    align-items: center;

    transition: 0.2s ease-in-out;

    color: var(--darkGray);
    cursor: text;

>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
    pointer-events: none;
  }

  > input,
  > label {
    width: 100%;
    height: 30px;
    font-size: 16px;
  }

  > input:focus {
    border-bottom: 2px solid var(--primary);
  }

  > input:not(:placeholder-shown) + label,
  > input:focus + label {
<<<<<<< HEAD
    top: -25px;
    font-size: 14px;
    left: 0px;
    color: var(--light);
  }

  /* > input:not(placeholder-shown) */
=======
    font-size: 14px;
    color: var(--light);
    top: -25px;
    left: 0;
  }
>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
`;
