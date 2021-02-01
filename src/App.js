import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Router from "./router";

function App() {

  //const route = window.location.href.split("/").pop();

  return (
    <>
      <GlobalStyles/>
      <Router/>
    </>
  );
}

export default App;
