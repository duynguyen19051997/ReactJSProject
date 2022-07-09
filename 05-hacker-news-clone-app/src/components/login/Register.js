import React, { useState } from "react";
import { app } from "../../config/firebase-config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useHistory } from "react-router-dom";

import { Button, Card, Input } from "../ui/UI";
import classes from "./Register.module.css";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const registerHandler = (event) => {
    event.preventDefault();
    const authentication = getAuth();
    createUserWithEmailAndPassword(authentication, email, password).then(
      (response) => {
        history.push("/login");
      }
    );
  };

  return (
    <Card className={classes["register"]}>
      <form onSubmit={registerHandler}>
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
                <Input
                  type="password"
                  id="re_password"
                  placeholder="Re-password"
                  onHandlerInput={setPassword}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Button type="submit">Register</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </Card>
  );
};
