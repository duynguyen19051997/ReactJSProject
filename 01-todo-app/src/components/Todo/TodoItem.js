import { useContext } from "react";
import { TodoContext } from "../context/todo-context";
import classes from "./TodoItem.module.css";

export const TodoItem = (props) => {
  const { id, title, isActive, isCompleted } = props.item;
  const { inactiveTodo, completedTodo, removeTodo } = useContext(TodoContext);

  const inactiveTodoHandler = () => {
    inactiveTodo(id);
  };

  const completedTodoHandler = () => {
    completedTodo(id);
  };

  const removeTodoHandler = () => {
    removeTodo(id);
  };

  return (
    <li className={classes["todo__item"]} key={id}>
      <input
        type="checkbox"
        id="active"
        checked={isActive}
        onChange={inactiveTodoHandler}
      />
      <span className={classes.title}>{title}</span>
      <input
        type="checkbox"
        id="complete"
        checked={isCompleted}
        onChange={completedTodoHandler}
      />
      <button onClick={removeTodoHandler}>Delete</button>
    </li>
  );
};
