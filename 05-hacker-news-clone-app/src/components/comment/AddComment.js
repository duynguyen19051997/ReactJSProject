import { useState } from "react";
import { NewsItem } from "../news/NewsItem";
import { Button, Card, TextArea } from "../ui/UI";

import classes from "./AddComment.module.css";

export const AddComment = (props) => {
  const [enteredComment, setEnteredComment] = useState("");
  const submitAddCommentHandler = (event) => {
    event.preventDefault();
    console.log(enteredComment);
  };

  return (
    <Card className={classes["add_comment_area"]}>
      <NewsItem item={props.item} />
      <Card className={classes["add_comment_form"]}>
        <form onSubmit={submitAddCommentHandler}>
          <table>
            <tbody>
              <tr>
                <td>
                  <TextArea
                    id="comment_text"
                    cols={100}
                    rows={5}
                    value={enteredComment}
                    onHandlerTextArea={setEnteredComment}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <Button
                    className={classes["add_comment_button"]}
                    type="submit"
                  >
                    Add Comment
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </Card>
    </Card>
  );
};
