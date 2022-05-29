import { useState } from "react";

import { Button, Card, Input, LinkUI } from "../ui/UI";
import classes from "./Login.module.css";

export const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (event) => {
    event.preventDefault();
    console.log(username + " " + password);
  };

  return (
    <Card className={classes["login"]}>
      <form onSubmit={loginHandler}>
        <table>
          <tbody>
            <tr>
              <td>
                <Input
                  type="text"
                  id="username"
                  placeholder="Username"
                  onHandlerInput={setUsername}
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
