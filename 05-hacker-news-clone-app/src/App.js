import { Route, Switch } from "react-router-dom";

import React from "react";
import { Header } from "./components/header/Header";
import { LoginPage } from "./pages/LoginPage";
import { HomePage } from "./pages/HomePage";
import { RegisterPage } from "./pages/RegisterPage";
import { NewsPage } from "./pages/NewsPage";
import { Footer } from "./components/footer/Footer";
import { CommentsPage } from "./pages/CommentsPage";
import { AddNewsPage } from "./pages/AddNewsPage";
import { AskPager } from "./pages/AskPage";

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
          <Route path="/news" exact>
            <NewsPage />
          </Route>
          <Route path="/comments" exact>
            <CommentsPage />
          </Route>
          <Route path="/ask" exact>
            <AskPager />
          </Route>
          <Route path="/submit" exact>
            <AddNewsPage />
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
      <Footer />
    </div>
  );
}

export default App;
