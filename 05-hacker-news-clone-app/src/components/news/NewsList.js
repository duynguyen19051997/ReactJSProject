import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../ui/UI";
import { NewsItem } from "./NewsItem";
import { Fragment } from "react";

import classes from "./NewsList.module.css";

export const NewsList = (props) => {
  const newsState = useSelector((state) => state.news.items);

  let content = "";

  if (newsState && newsState.length > 0) {
    content = newsState.map((item) => (
      <Fragment>
        <NewsItem key={item.id} item={item} />
      </Fragment>
    ));
  } else {
    content = "No items";
  }

  return <Card className={classes["news_list_area"]}>{content}</Card>;
};
