import { useContext } from "react";

import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { TodoSearch } from "./TodoSearch";
import { TodoContext } from "../context/todo-context";

export const Todo = (props) => {
  const { items } = useContext(TodoContext);

  return (
    <div className="container bg-light">
      <p className="h1 text-uppercase">Things To Do</p>
      <TodoAdd />
      <TodoList items={items} />
      <TodoSearch />
    </div>
  );
};
