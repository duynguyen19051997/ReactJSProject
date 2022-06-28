import { Card, Title } from "../ui/UI";
import classes from "./Footer.module.css";

export const Footer = (props) => {
  return (
    <Card className={classes["footer"]}>
      <Card>
        <Title>Hacker News Clone</Title>
      </Card>
    </Card>
  );
};
