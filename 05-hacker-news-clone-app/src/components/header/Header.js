import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Card, LinkUI, Title } from "../ui/UI";
import { authActions } from "../../store/auth-slice";

import classes from "./Header.module.css";

export const Header = (props) => {
  const [isLogin, setIsLogin] = useState(false);

  const authState = useSelector((state) => state.auth);

  useEffect(() => {
    if (authState) {
      setIsLogin(authState.isLoggedIn);
    } else {
      setIsLogin(false);
    }
  }, [authState]);

  const logoutHandler = (event) => {
    event.preventDefault();
    authActions.logout();
  };

  return (
    <nav className={classes["site_nav"]}>
      <Card className={classes.header}>
        <ul className={classes.bar}>
          <li>
            <Title>Hacker New</Title>
          </li>
          <li>
            <LinkUI href="/news" className={classes["header_link"]}>
              News
            </LinkUI>
          </li>
          <li>
            <LinkUI href="/comments" className={classes["header_link"]}>
              Comments
            </LinkUI>
          </li>
          <li>
            <LinkUI href="/show" className={classes["header_link"]}>
              Show
            </LinkUI>
          </li>
          <li>
            <LinkUI href="/ask" className={classes["header_link"]}>
              Ask
            </LinkUI>
          </li>
          <li>
            <LinkUI href="/jobs" className={classes["header_link"]}>
              Job
            </LinkUI>
          </li>
          <li>
            <LinkUI href="/submit" className={classes["header_link"]}>
              Submit
            </LinkUI>
          </li>
        </ul>
        <ul className={classes.login}>
          {!isLogin && (
            <li>
              <LinkUI href="/login" className={classes["header_login"]}>
                Login
              </LinkUI>
            </li>
          )}
          {!isLogin && (
            <li>
              <LinkUI href="/register" className={classes["header_login"]}>
                Create new account
              </LinkUI>
            </li>
          )}
          {isLogin && (
            <li>
              <Button
                className={classes["header_login"]}
                onClick={logoutHandler}
              >
                Log out
              </Button>
            </li>
          )}
        </ul>
      </Card>
    </nav>
  );
};
