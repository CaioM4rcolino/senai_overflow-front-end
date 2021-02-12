import "./styles";
import { Container, SearchBar } from "./styles";

function Search() {
  return (
    <Container>
      <input placeholder="Digite sua busca"></input>
      <button>Buscar</button>
    </Container>
  );
}

export default Search;
