import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { app } from "../../config/firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { Button, Card, Input, LinkUI } from "../ui/UI";
import classes from "./Login.module.css";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const loginHandler = (event) => {
    event.preventDefault();
    const authentication = getAuth();
    signInWithEmailAndPassword(authentication, email, password).then(
      (response) => {
        history.push("/");
        sessionStorage.setItem(
          "AuthToken",
          response._tokenResponse.refreshToken
        );
      }
    );
  };

  return (
    <Card className={classes["login"]}>
      <form onSubmit={loginHandler}>
        <table>
          <tbody>
            <tr>
              <td>
                <Input
                  type="email"
                  id="email"
                  placeholder="Email"
                  onHandlerInput={setEmail}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Input
                  type="password"
                  id="password"
                  placeholder="Password"
                  onHandlerInput={setPassword}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Button type="submit">Login</Button>
              </td>
            </tr>
            <tr>
              <td>
                <hr />
                <LinkUI
                  id="create_new_account"
                  href="/register"
                  title="Create New Account"
                >
                  Create new account
                </LinkUI>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </Card>
  );
};
