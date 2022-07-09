import React from "react";
import { Card } from "../ui/UI";
import { NewsItem } from "./NewsItem";
import { Fragment } from "react";

import classes from "./NewsList.module.css";

export const NewsList = (props) => {
  const { items } = props;

  let content = "";

  if (items && items.length > 0) {
    content = items.map((item) => (
      <Fragment>
        <NewsItem key={item.id} item={item} />
      </Fragment>
    ));
  } else {
    content = "No items";
  }

  return <Card className={classes["news_list_area"]}>{content}</Card>;
};
