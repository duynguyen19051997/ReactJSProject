import classes from "./TodoItem.module.css";

export const TodoItem = (props) => {
  const { id, title, isActive, isCompleted } = props.item;
  return (
    <li
      className={classes["todo__item"]}
      key={id}
      onClick={props.onRemoveTodo.bind(this, id)}
    >
      <span>{isActive ? "Active" : "Inactive"}</span>
      <span>{title}</span>
      <span>{isCompleted ? "Complete" : "Incomplete"}</span>
    </li>
  );
};
