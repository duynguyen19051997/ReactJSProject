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
    <form onSubmit={submitAddHandler}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add new"
          aria-label="Add new Todo"
          aria-describedby="button-addon2"
          ref={titleRef}
          id="title"
        />
        <button className="btn btn-success" type="submit" id="button-addon2">
          Add Todo
        </button>
      </div>
    </form>
  );
};
