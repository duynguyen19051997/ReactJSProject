import { Card, Title } from "../ui/UI";
import classes from "./NewsItem.module.css";

export const NewsItem = (props) => {
  const { id, title, date_time, comments_count } = props.item;

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
            <span>{date_time}</span>
          </Card>
          <Card className={classes["news_item_dash"]}>
            <span>&mdash;</span>
          </Card>
          <Card className={classes["news_item_comments"]}>
            <span>{comments_count} comments</span>
          </Card>
        </Card>
      </Card>
    </Card>
  );
};
