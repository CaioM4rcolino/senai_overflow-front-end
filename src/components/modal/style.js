import styled from "styled-components";

export const Overlay = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 9;
    background-color: #333c;

    display: flex;
    justify-content: center;
    align-items: center;


`;

export const ModalContainer = styled.div`

    min-width: 500px;
    min-height: 450px;
    max-height: calc(100vh - 20px);
    padding: 20px;

    overflow-y: auto;
   
    z-index: 19;
    background-color: var(--dark);
    box-shadow: 0px 0px 10px black;
    border-radius: 10px;
    
    position: relative;

    >span{
        position: absolute;
        top: 15px;
        right: 20px;

        font-size: 30px;
        cursor: pointer;
        transition: .2s;

        :hover{
            color: var(--primary);
        }
    }

    >header{
        font-weight: bold;
        text-align: center;
        font-size: 24px;
        margin: 0px 20px;
    }
`;