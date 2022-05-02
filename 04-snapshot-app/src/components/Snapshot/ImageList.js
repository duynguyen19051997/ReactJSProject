import { Card, Image, Table } from "../UI/UI";
import classes from "./ImageList.module.css";
import Icon from "../../logo.svg";

export const ImageList = (props) => {
  return (
    <Card className={classes["image__area"]}>
      <Image className={classes["image__detail"]} src={Icon} />
      <Image className={classes["image__detail"]} src={Icon} />
      <Image className={classes["image__detail"]} src={Icon} />
      <Image className={classes["image__detail"]} src={Icon} />
      <Image className={classes["image__detail"]} src={Icon} />
      <Image className={classes["image__detail"]} src={Icon} />
      <Image className={classes["image__detail"]} src={Icon} />
      <Image className={classes["image__detail"]} src={Icon} />
      <Image className={classes["image__detail"]} src={Icon} />
    </Card>
  );
};
