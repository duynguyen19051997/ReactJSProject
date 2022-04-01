import { useState } from "react";

import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { TodoSearch } from "./TodoSearch";

import classes from "./Todo.module.css";

const TODO_DUMMY = [
  { id: 1, title: "Learn English", isActive: false, isCompleted: false },
  { id: 2, title: "Learn React", isActive: false, isCompleted: false },
  { id: 3, title: "Reading books", isActive: false, isCompleted: false },
  { id: 4, title: "Play football", isActive: false, isCompleted: false },
];

export const Todo = (props) => {
  const [items, setItems] = useState([]);

  const addTodoHandler = (item) => {
    setItems((currentItems) => {
      const newId = currentItems ? currentItems.length + 1 : 1;
      return [{ id: newId, ...item }, ...currentItems];
    });
  };

  const removeTodoHandler = (id) => {
    setItems((currentItems) => {
      return currentItems.filter((x) => x.id !== id);
    });
  };

  return (
    <div className={classes.todo}>
      <h1>Things To Do</h1>
      <TodoAdd onAddTodo={addTodoHandler} />
      <TodoList items={items} onRemoveTodo={removeTodoHandler} />
      <TodoSearch />
    </div>
  );
};
