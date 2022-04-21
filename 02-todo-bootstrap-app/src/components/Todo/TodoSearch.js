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

  let classesIsAll = `btn btn-warning ${search.isAll ? classes.active : ""}`;

  let classesIsActive = `btn btn-danger ${
    search.isActive ? classes.active : ""
  }`;

  let classesIsCompleted = `btn btn-info ${
    search.isCompleted ? classes.active : ""
  }`;

  return (
    <form
      onSubmit={submitSearchHandler}
      className="row row-cols-lg-auto g-3 align-items-center"
    >
      <div className="col-12">
        <input
          className="form-control"
          id="text-search"
          type="text"
          placeholder="Search here"
          value={search.title}
          onChange={titleChangeHandler}
          onBlur={titleBlurHandler}
        />
      </div>
      <div className="col-12">
        <button className={classesIsAll} onClick={allHandler}>
          All
        </button>
      </div>
      <div className="col-12">
        <button className={classesIsActive} onClick={activeHandler}>
          Active
        </button>
      </div>
      <div className="col-12">
        <button className={classesIsCompleted} onClick={completedHandler}>
          Completed
        </button>
      </div>
      <div className="col-12">
        <button className="btn btn-light" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};
