import { Container } from "./style";

import imgLogo from "../../assets/loading.png";

function Loading({state}){
    return(
        <Container>
            <img src={imgLogo} alt=""/>
            <p>Carregando...</p>
        </Container>
    );
}

export default Loading;