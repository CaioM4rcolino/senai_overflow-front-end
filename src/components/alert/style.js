import styled from "styled-components";

export const Container = styled.div`

    width: 0px;
    height: 80px;
    margin: 10px;

    transition: width 0.4s;

    background-color: ${(props) => props.type === "error" ? "#D90425cc" : "#04D925CC"};

    border-radius: 4px;

    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;


    >h1{

        font-size: 18px;
        margin: 5px;
        white-space: nowrap;

    }

    >p{
        font-size: 14px;
        margin-left: 5px;
    }

    >span{
        position: absolute;
        top: 5px;
        right: 10px;

        font-size: 30px;
        cursor: pointer;
        transition: .2s;

        :hover{
            color: var(--primary);
        }
    }

`;