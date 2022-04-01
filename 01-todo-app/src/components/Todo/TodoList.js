import { TodoItem } from "./TodoItem.js";

import classes from "./TodoList.module.css";

export const TodoList = (props) => {
  return (
    <ul className={classes["todo__list"]}>
      {props.items.map((x) => (
        <TodoItem item={x} key={x.id} />
      ))}
    </ul>
  );
};
