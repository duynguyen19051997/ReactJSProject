import { useContext, useState } from "react";
import { TodoContext } from "../context/todo-context";

import classes from "./TodoSearch.module.css";

export const TodoSearch = (props) => {
  const [search, setSearch] = useState({
    title: "",
    isActive: true,
    isCompleted: false,
    isAll: false,
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

  const allHandler = (event) => {
    setSearch((prevSearch) => ({
      isActive: true,
      isCompleted: false,
      isAll: !prevSearch.isAll,
      title: "",
    }));
  };

  const activeHandler = (event) => {
    setSearch((prevSearch) => ({
      ...prevSearch,
      isActive: !prevSearch.isActive,
    }));
  };

  const completedHandler = (event) => {
    setSearch((prevSearch) => ({
      ...prevSearch,
      isCompleted: !prevSearch.isCompleted,
    }));
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
      <button
        className={search.isAll ? classes.active : ""}
        onClick={allHandler}
      >
        All
      </button>
      <button
        className={search.isActive ? classes.active : ""}
        onClick={activeHandler}
      >
        Active
      </button>
      <button
        className={search.isCompleted ? classes.active : ""}
        onClick={completedHandler}
      >
        Completed
      </button>
      <button type="submit">Search</button>
    </form>
  );
};
