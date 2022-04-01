import classes from "./TodoItem.module.css";

export const TodoItem = (props) => {
  const { id, title, isActive, isCompleted } = props.item;
  return (
    <li className={classes["todo__item"]} key={id}>
      <input type="checkbox" id="active" checked={isActive} />
      <span className={classes.title}>{title}</span>
      <input type="checkbox" id="complete" checked={isCompleted} />
      <button onClick={props.onRemoveTodo.bind(this, id)}>Delete</button>
    </li>
  );
};
