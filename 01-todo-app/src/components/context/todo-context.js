import React, { useState } from "react";

export const TodoContext = React.createContext({
  items: [],
  searchItems: [],
  search: null,
  addTodo: (todo) => {},
  removeTodo: (id) => {},
  inactiveTodo: (id) => {},
  completedTodo: (id) => {},
  searchTodo: (search) => {},
});

export const TodoContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [searchItems, setSearchItems] = useState([]);
  const [search, setSearch] = useState(null);

  const addTodoHandler = (todo) => {
    setItems((currentItems) => {
      const newId = currentItems ? currentItems.length + 1 : 1;
      return [{ id: newId, ...todo }, ...currentItems];
    });
  };

  const removeTodoHandler = (id) => {
    setItems((currentItems) => {
      return currentItems.filter((x) => x.id !== id);
    });
  };

  const inactiveTodoHandler = (id) => {
    setItems((currentItems) => {
      const activeTodoIndex = currentItems.findIndex((x) => x.id === id);
      const activeTodo = currentItems[activeTodoIndex];
      const updateItems = [...currentItems];
      updateItems[activeTodoIndex] = {
        ...activeTodo,
        isActive: !activeTodo.isActive,
      };
      return updateItems;
    });
  };

  const completedTodoHandler = (id) => {
    setItems((currentItems) => {
      const completedTodoIndex = currentItems.findIndex((x) => x.id === id);
      const completedTodo = currentItems[completedTodoIndex];
      const updateItems = [...currentItems];
      updateItems[completedTodoIndex] = {
        ...completedTodo,
        isCompleted: !completedTodo.isCompleted,
      };
      return updateItems;
    });
  };

  const searchTodoHandler = (search) => {
    setSearch({
      title: search.title,
      isCompleted: search.isCompleted,
      isActive: search.isActive,
      isAll: search.isAll,
    });
    let result = items;
    if (!search.isAll) {
      if (search.title.length > 0) {
        result = items.filter(
          (x) =>
            x.title.includes(search.title) &&
            x.isActive === search.isActive &&
            x.isCompleted === search.isCompleted
        );
      } else {
        result = items.filter(
          (x) =>
            x.isActive === search.isActive &&
            x.isCompleted === search.isCompleted
        );
      }
    }
    setSearchItems(result);
  };

  return (
    <TodoContext.Provider
      value={{
        items: items,
        searchItems: searchItems,
        search: search,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler,
        inactiveTodo: inactiveTodoHandler,
        completedTodo: completedTodoHandler,
        searchTodo: searchTodoHandler,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};
