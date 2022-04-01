import { useRef, useContext } from "react";
import { TodoContext } from "../context/todo-context";

import classes from "./TodoAdd.module.css";

export const TodoAdd = (props) => {
  const { addTodo } = useContext(TodoContext);
  const titleRef = useRef("");

  const submitAddHandler = (event) => {
    event.preventDefault();
    const enteredTitleRef = titleRef.current.value;
    if (enteredTitleRef && enteredTitleRef.length > 0) {
      const item = {
        title: enteredTitleRef,
        isActive: true,
        isCompleted: false,
      };
      addTodo(item);
      event.target.reset();
    }
  };

  return (
    <form onSubmit={submitAddHandler} className={classes["todo__add"]}>
      <input id="title" type="text" placeholder="Add new" ref={titleRef} />
      <button type="submit">Add Todo</button>
    </form>
  );
};
