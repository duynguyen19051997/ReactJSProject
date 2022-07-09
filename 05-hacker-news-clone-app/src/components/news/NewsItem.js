import React from "react";
import { Card, Title } from "../ui/UI";
import classes from "./NewsItem.module.css";

export const NewsItem = (props) => {
  const { id, title, modified_date, modified_by, comments } = props.item;

  return (
    <Card className={classes["news_item_area"]}>
      <Card className={classes["news_item_number"]}>
        <span>{id}</span>
      </Card>
      <Card className={classes["news_item_content"]}>
        <Card className={classes["news_item_title"]}>
          <Title>{title}</Title>
        </Card>
        <Card className={classes["news_item_info"]}>
          <Card className={classes["news_item_date_time"]}>
            <span>{modified_date}</span>
          </Card>
          {comments && comments.length > 0 && (
            <Card className={classes["news_item_dash"]}>
              <span>&mdash;</span>
            </Card>
          )}
          {comments && comments.length > 0 && (
            <Card className={classes["news_item_comments"]}>
              <span>{comments.length}comments</span>
            </Card>
          )}
        </Card>
      </Card>
    </Card>
  );
};
