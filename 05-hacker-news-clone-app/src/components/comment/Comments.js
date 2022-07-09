import React from "react";
import { Card } from "../ui/UI";
import { AddComment } from "./AddComment";
import { Comment } from "./Comment";
import classes from "./Comments.module.css";

const DUMMY_DATA = {
  id: "5",
  title: "Your most unhappy customers are your greatest source of learning.",
  modified_date: new Date().toLocaleDateString("en-US"),
  modified_by: "DuyNVA",
  comments: [
    {
      id: "6",
      content:
        "Your most unhappy customers are your greatest source of learning.",
      modified_date: new Date().toLocaleDateString("en-US"),
      modified_by: "DuyNVA",
      comments_children: [
        {
          id: "7",
          content:
            "Your most unhappy customers are your greatest source of learning.",
          modified_date: new Date().toLocaleDateString("en-US"),
          modified_by: "DuyNVA",
          comments_children: [
            {
              id: "10",
              content:
                "Your most unhappy customers are your greatest source of learning.",
              modified_date: new Date().toLocaleDateString("en-US"),
              modified_by: "DuyNVA",
              comments_children: [],
            },
            {
              id: "11",
              content:
                "Your most unhappy customers are your greatest source of learning.",
              modified_date: new Date().toLocaleDateString("en-US"),
              modified_by: "DuyNVA",
              comments_children: [],
            },
          ],
        },
        {
          id: "8",
          content:
            "Your most unhappy customers are your greatest source of learning.",
          modified_date: new Date().toLocaleDateString("en-US"),
          modified_by: "DuyNVA",
          comments_children: [],
        },
      ],
    },
    {
      id: "9",
      content:
        "Your most unhappy customers are your greatest source of learning.",
      modified_date: new Date().toLocaleDateString("en-US"),
      modified_by: "DuyNVA",
      comments_children: [
        {
          id: "12",
          content:
            "Your most unhappy customers are your greatest source of learning.",
          modified_date: new Date().toLocaleDateString("en-US"),
          modified_by: "DuyNVA",
          comments_children: [],
        },
        {
          id: "13",
          content:
            "Your most unhappy customers are your greatest source of learning.",
          modified_date: new Date().toLocaleDateString("en-US"),
          modified_by: "DuyNVA",
          comments_children: [],
        },
      ],
    },
  ],
};

const CommentList = (props) => {
  const { comment } = props;
  let children = null;

  if (comment.comments_children && comment.comments_children.length > 0) {
    children = (
      <ul className={classes["comments_list_ul"]}>
        {comment.comments_children.map((x) => (
          <CommentList comment={x} key={x.id} />
        ))}
      </ul>
    );
  }

  return (
    <li className={classes["comments_list_ul_li"]}>
      <Comment comment={comment} />
      <Card className={classes["comments_list_ul_li_children"]}>
        {children}
      </Card>
    </li>
  );
};

export const Comments = (props) => {
  const comments = DUMMY_DATA.comments;

  return (
    <Card className={classes["comments_list_area"]}>
      <AddComment item={DUMMY_DATA} />
      {comments && comments.length > 0 && (
        <Card>
          {comments.map((x) => (
            <CommentList
              className={classes["comments_list_detail"]}
              comment={x}
              key={x.id}
            />
          ))}
        </Card>
      )}
    </Card>
  );
};
