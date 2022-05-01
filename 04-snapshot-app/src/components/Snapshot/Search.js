import { useState, useEffect } from "react";
import Diamond from "../../logo.svg";

import { Card, Form, Image } from "../UI/UI";
import classes from "./Search.module.css";

export const Search = (props) => {
  const [enteredSearch, setEnteredSearch] = useState("");

  useEffect(() => {
    if (enteredSearch.length > 0) {
      console.log(enteredSearch);
    }
  }, [enteredSearch]);

  return (
    <Card>
      <Form
        onHandlerInput={setEnteredSearch}
        value={enteredSearch}
        id="search-input"
        type="text"
      />
      <Image src={Diamond} />
    </Card>
  );
};
