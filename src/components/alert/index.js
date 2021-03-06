import { Container } from "./style";
import { useEffect, useRef } from "react";

function Alert({message, type, handleClose}){

    const containerRef = useRef();

    useEffect(() => {

        if(message){
            containerRef.current.style.width = "300px";

            setTimeout(() => {
                handleClose(undefined)
            }, 5000);
        }
        else{
            containerRef.current.style.width = "0px";
        }

    }, [message, handleClose]);

    return(
        <Container ref={containerRef} type={type}>
            {message && (

            <>
            <span onClick={() => handleClose(undefined)}>&times;</span>
            <h1>{message.title}</h1>
            <p>{message.description}</p>
            </>

            )}
            
        </Container>
    );
}


export default Alert;