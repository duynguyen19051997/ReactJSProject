import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { app } from "../../config/firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { authActions } from "../../store/auth-slice";

import { Button, Card, Input, LinkUI } from "../ui/UI";
import classes from "./Login.module.css";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();
    const authentication = getAuth();
    signInWithEmailAndPassword(authentication, email, password).then(
      (response) => {
        const user = {
          id: response.user.uid,
          email: email,
          password: password,
          authToken: response._tokenResponse.refreshToken,
          isLoggedIn: true,
        };
        dispatch(authActions.login({ user: user }));
      }
    );
  };

  useEffect(() => {
    if (authState.isLoggedIn) {
      history.push("/");
    }
  }, [authState]);

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
