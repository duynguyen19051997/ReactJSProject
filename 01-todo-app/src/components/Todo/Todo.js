import { useState, useContext, useEffect } from "react";

import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { TodoSearch } from "./TodoSearch";
import { TodoContext } from "../context/todo-context";

import classes from "./Todo.module.css";

const TODO_DUMMY = [
  { id: 1, title: "Learn English", isActive: false, isCompleted: false },
  { id: 2, title: "Learn React", isActive: false, isCompleted: false },
  { id: 3, title: "Reading books", isActive: false, isCompleted: false },
  { id: 4, title: "Play football", isActive: false, isCompleted: false },
];

export const Todo = (props) => {
  const { items, searchItems, search } = useContext(TodoContext);
  const [data, setData] = useState(items);

  useEffect(() => {
    if (search) {
      setData(searchItems);
    } else {
      setData(items);
    }
  }, [search, items, searchItems]);

  return (
    <div className={classes.todo}>
      <h1>Things To Do</h1>
      <TodoAdd />
      <TodoList items={data} />
      <TodoSearch />
    </div>
  );
};
