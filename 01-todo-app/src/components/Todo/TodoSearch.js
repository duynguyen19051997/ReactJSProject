import { useContext, useState } from "react";
import { TodoContext } from "../context/todo-context";

import classes from "./TodoSearch.module.css";

export const TodoSearch = (props) => {
  const [search, setSearch] = useState({
    title: "",
    isActive: true,
    isCompleted: false,
  });
  const { searchTodo } = useContext(TodoContext);

  const submitSearchHandler = (event) => {
    event.preventDefault();
    searchTodo(search);
  };

  const titleChangeHandler = (event) => {
    const enteredTitle = event.target.value;
    setSearch((prevSearch) => ({ ...prevSearch, title: enteredTitle.trim() }));
  };

  const titleBlurHandler = (event) => {
    searchTodo(search);
  };

  return (
    <form onSubmit={submitSearchHandler} className={classes["todo__search"]}>
      <input
        id="text-search"
        type="text"
        placeholder="Search here"
        value={search.title}
        onChange={titleChangeHandler}
        onBlur={titleBlurHandler}
      />
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
      <button type="submit">Search</button>
    </form>
  );
};
