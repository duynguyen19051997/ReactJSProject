import { TodoItem } from "./TodoItem.js";

export const TodoList = (props) => {
  let content = "";

  if (props.items && props.items.length > 0) {
    content = (
      <ul className="list-group pb-3">
        {props.items.map((x) => (
          <TodoItem item={x} key={x.id} />
        ))}
      </ul>
    );
  } else {
    content = (
      <div className="alert alert-secondary text-center" role="alert">
        Nothing to show!
      </div>
    );
  }

  return <div>{content}</div>;
};
