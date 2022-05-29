import { Route, Switch, Redirect } from "react-router-dom";

import { Header } from "./components/header/Header";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="*">
            <HomePage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
