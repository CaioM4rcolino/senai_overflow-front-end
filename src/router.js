import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
=======

>>>>>>> ce290753520ecda0aa732162168fe4563dab1d18
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { isSignedIn } from "./services/security";

function PrivateRoute({ children, ...rest }) {
  if (isSignedIn()) {
    return <Route {...rest}>{children}</Route>;
  } else {
    return <Redirect to="/" />;
  }
}

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
