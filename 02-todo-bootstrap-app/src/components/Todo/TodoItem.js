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
    <li
      className="list-group-item list-group-item-action list-group-item-secondary"
      key={id}
    >
      <div className="row">
        <div className="col-1">
          <input
            className="form-check-input align-middle"
            type="checkbox"
            id="active"
            checked={isActive}
            onChange={inactiveTodoHandler}
          />
        </div>
        <div className="col-9">
          <span className="align-middle h5">{title}</span>
        </div>
        <div className="col-1">
          <input
            className="form-check-input align-middle"
            type="checkbox"
            id="complete"
            checked={isCompleted}
            onChange={completedTodoHandler}
          />
        </div>
        <div className="col-1">
          <button
            type="button"
            className="btn-close align-middle"
            aria-label="Close"
            onClick={removeTodoHandler}
          ></button>
        </div>
      </div>
    </li>
  );
};
