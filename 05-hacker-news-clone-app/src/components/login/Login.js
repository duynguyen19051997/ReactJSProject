import { useState } from "react";

import { Button, Card, Input, Label } from "../ui/UI";
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
                <Label>Username</Label>
              </td>
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
                <Label>Password</Label>
              </td>
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
              <td colSpan={2}>
                <Button type="submit">Login</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </Card>
  );
};
