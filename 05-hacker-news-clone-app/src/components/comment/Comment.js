import React from "react";
import { Card, LinkUI } from "../ui/UI";
import classes from "./Comment.module.css";

export const Comment = (props) => {
  const { id, modified_by, modified_date, content } = props.comment;
  return (
    <Card className={classes["comment_area"]}>
      <Card className={classes["comment_header"]}>
        <Card className={classes["comment_number"]}>
          <span>{id}</span>
        </Card>
        <Card className={classes["comment_dash"]}>
          <span>&mdash;</span>
        </Card>
        <Card className={classes["comment_author"]}>
          <span>{modified_by}</span>
        </Card>
        <Card className={classes["comment_dash"]}>
          <span>&mdash;</span>
        </Card>
        <Card className={classes["comment_time"]}>
          <span>{modified_date}</span>
        </Card>
      </Card>
      <Card className={classes["comment_body"]}>
        <span>{content}</span>
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
