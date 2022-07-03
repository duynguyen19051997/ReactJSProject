import { Card, LinkUI } from "../ui/UI";
import classes from "./Comment.module.css";

export const Comment = (props) => {
  return (
    <Card className={classes["comment_area"]}>
      <Card className={classes["comment_header"]}>
        <Card className={classes["comment_number"]}>
          <span>1</span>
        </Card>
        <Card className={classes["comment_dash"]}>
          <span>&mdash;</span>
        </Card>
        <Card className={classes["comment_author"]}>
          <span>Author</span>
        </Card>
        <Card className={classes["comment_dash"]}>
          <span>&mdash;</span>
        </Card>
        <Card className={classes["comment_time"]}>
          <span>Time</span>
        </Card>
      </Card>
      <Card className={classes["comment_body"]}>
        <span>
          I received my B. S. in computer science with a math minor from the
          University of Minnesota this past May 2022, and am currently pursuing
          an M.S. in computer science at the same university. During my
          academics, I focused on software engineering and machine learning.
          Since June 2021, I have taught Python and Scratch to elementary and
          middle schoolers at the non-profit AiGoLearning. I am currently
          interning at TurbineHub, where I write code to integrate data on wind
          turbines and electricity prices. These experiences have taught me to
          be a clearer communicator and a self-starter.
        </span>
      </Card>
      <Card className={classes["comment_footer"]}>
        <LinkUI
          className={classes["comment_reply"]}
          title="Reply"
          href="/comments"
        >
          Reply
        </LinkUI>
      </Card>
    </Card>
  );
};
