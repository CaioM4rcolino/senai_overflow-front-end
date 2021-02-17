import "./styles";
import { Container } from "./styles";

function Search({onChange, onClick}) {
  return (
    <Container>
        <input onChange={onChange}  placeholder="Pesquisar no SenaiOverflow"></input>
        <button onClick={onClick}>Buscar</button>
    </Container>
  );
}

export default Search;
