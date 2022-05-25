import { Card, Link, Title } from "../ui/UI";

import classes from "./Header.module.css";

export const Header = (props) => {
  return (
    <nav className={classes["site_nav"]}>
      <Card className={classes.header}>
        <ul className={classes.bar}>
          <li>
            <Title>Hacker New</Title>
          </li>
          <li>
            <Link>New</Link>
          </li>
          <li>
            <Link>Comments</Link>
          </li>
          <li>
            <Link>Show</Link>
          </li>
          <li>
            <Link>Ask</Link>
          </li>
          <li>
            <Link>Job</Link>
          </li>
          <li>
            <Link>Submit</Link>
          </li>
        </ul>
        <ul className={classes.login}>
          <li>
            <Link>Login</Link>
          </li>
          <li>
            <Link>Create new account</Link>
          </li>
        </ul>
      </Card>
    </nav>
  );
};
