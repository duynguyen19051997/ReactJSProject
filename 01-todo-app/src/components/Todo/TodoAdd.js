import { useRef } from "react";

import classes from "./TodoAdd.module.css";

export const TodoAdd = (props) => {
  const titleRef = useRef("");

  const submitAddHandler = (event) => {
    event.preventDefault();
    const enteredTitleRef = titleRef.current.value;
    const item = { title: enteredTitleRef, isActive: true, isCompleted: false };
    props.onAddTodo(item);
    event.target.reset();
  };

  return (
    <form onSubmit={submitAddHandler} className={classes["todo__add"]}>
      <input id="title" type="text" placeholder="Add new" ref={titleRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
