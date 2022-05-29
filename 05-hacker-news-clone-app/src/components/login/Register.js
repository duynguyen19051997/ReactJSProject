import { useState } from "react";

import { Button, Card, Input } from "../ui/UI";
import classes from "./Register.module.css";

export const Register = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = (event) => {
    event.preventDefault();
    console.log(username + " " + password);
  };

  return (
    <Card className={classes["register"]}>
      <form onSubmit={registerHandler}>
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
