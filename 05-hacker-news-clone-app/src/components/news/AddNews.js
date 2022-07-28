import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { newsActions } from "../../store/news-slice";
import { sendNewsData } from "../../store/news-actions";
import { useDispatch } from "react-redux";

import { Button, Card, Input, Label, TextArea } from "../ui/UI";
import classes from "./AddNews.module.css";

export const AddNews = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredUrl, setEnteredUrl] = useState("");
  const [enteredText, setEnteredText] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const submitAddNewsHandler = (event) => {
    event.preventDefault();
    dispatch(
      newsActions.addNews({
        title: enteredTitle,
        link: enteredUrl,
        description: enteredText,
        modified_by: "DuyNVA",
      })
    );
    dispatch(sendNewsData());
    setEnteredTitle("");
    setEnteredUrl("");
    setEnteredText("");
    history.push("/news");
  };

  return (
    <Card className={classes["add_news_area"]}>
      <form onSubmit={submitAddNewsHandler}>
        <table>
          <thead>
            <tr>
              <th>
                <Label>Add News</Label>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Label>Title</Label>
              </td>
              <td>
                <Input
                  id="title"
                  type="text"
                  value={enteredTitle}
                  onHandlerInput={setEnteredTitle}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Label>URL</Label>
              </td>
              <td>
                <Input
                  id="url"
                  type="text"
                  value={enteredUrl}
                  onHandlerInput={setEnteredUrl}
                />
              </td>
            </tr>
            <tr>
              <td>
                <Label>Text</Label>
              </td>
              <td>
                <TextArea
                  id="text"
                  cols="100"
                  rows="5"
                  value={enteredText}
                  onHandlerTextArea={setEnteredText}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <Button
                  id="post"
                  type="submit"
                  className={classes["add_news_button"]}
                >
                  Submit
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </Card>
  );
};
