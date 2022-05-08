import { useState, useEffect, useContext } from "react";
import { SnapshotContext } from "../context/snapshot-context";

import { Button, Card, Form, Span } from "../UI/UI";
import classes from "./Search.module.css";

export const Search = (props) => {
  const [enteredSearch, setEnteredSearch] = useState("");
  const [isShowButtonSearch, setIsShowButtonSearch] = useState(false);
  const { history, searchImages } = useContext(SnapshotContext);

  useEffect(() => {
    if (enteredSearch.length > 0) {
      setIsShowButtonSearch(true);
    } else {
      setIsShowButtonSearch(false);
    }
  }, [enteredSearch]);

  const clickButtonHistoryHandler = (event) => {
    event.preventDefault();
    searchImages(event.target.value);
    setEnteredSearch(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    searchImages(enteredSearch);
  };

  return (
    <Card className={classes["search__area"]}>
      <Form
        className={classes["search__form"]}
        onHandlerInput={setEnteredSearch}
        isShowButtonSearch={isShowButtonSearch}
        value={enteredSearch}
        onSubmit={submitHandler}
        id="search-input"
        type="text"
      />
      <Card className={classes["search__history"]}>
        {history &&
          history.map((x) => (
            <Button
              key={x}
              className={classes["search__button"]}
              onClick={clickButtonHistoryHandler}
              value={x}
            >
              {x}
            </Button>
          ))}
      </Card>
      <Card className={classes["search__content"]}>
        {enteredSearch.length > 0 && <Span>{enteredSearch} Images</Span>}
      </Card>
    </Card>
  );
};
