import { useState, useEffect } from "react";

import { Button, Card, Form, Span } from "../UI/UI";
import classes from "./Search.module.css";

export const Search = (props) => {
  const [enteredSearch, setEnteredSearch] = useState("");
  const [isShowButtonSearch, setIsShowButtonSearch] = useState(false);

  useEffect(() => {
    if (enteredSearch.length > 0) {
      setIsShowButtonSearch(true);
    } else {
      setIsShowButtonSearch(false);
    }
  }, [enteredSearch]);

  return (
    <Card className={classes["search__area"]}>
      <Form
        className={classes["search__form"]}
        onHandlerInput={setEnteredSearch}
        isShowButtonSearch={isShowButtonSearch}
        value={enteredSearch}
        id="search-input"
        type="text"
      />
      <Card className={classes["search__history"]}>
        <Button className={classes["search__button"]}>cars</Button>
        <Button className={classes["search__button"]}>Money</Button>
        <Button className={classes["search__button"]}>House</Button>
        <Button className={classes["search__button"]}>Love</Button>
      </Card>
      <Card className={classes["search__content"]}>
        {enteredSearch.length > 0 && <Span>{enteredSearch} Images</Span>}
      </Card>
    </Card>
  );
};
