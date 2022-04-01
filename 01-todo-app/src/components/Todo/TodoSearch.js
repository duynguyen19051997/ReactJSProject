import classes from "./TodoSearch.module.css";

export const TodoSearch = (props) => {
  const submitSearchHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitSearchHandler} className={classes["todo__search"]}>
      <input id="text-search" type="text" placeholder="Search here" />
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
      <button type="submit">Search</button>
    </form>
  );
};
