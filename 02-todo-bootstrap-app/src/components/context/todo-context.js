import React, { useState } from "react";

export const TodoContext = React.createContext({
  items: [],
  addTodo: (todo) => {},
  removeTodo: (id) => {},
  inactiveTodo: (id) => {},
  completedTodo: (id) => {},
  searchTodo: (search) => {},
});

export const TodoContextProvider = (props) => {
  const [items, setItems] = useState([]);
  const [tempItems, setTempItems] = useState(items);

  const addTodoHandler = (todo) => {
    setItems((currentItems) => {
      const newId =
        currentItems && currentItems.length > 0 ? currentItems.length + 1 : 1;
      let updateItems = [];
      if (currentItems) {
        updateItems = [{ id: newId, ...todo }, ...currentItems];
      } else {
        updateItems.push({ id: newId, ...todo });
      }
      setTempItems(updateItems);
      return updateItems;
    });
  };

  const removeTodoHandler = (id) => {
    setItems((currentItems) => {
      const updateItems = currentItems.filter((x) => x.id !== id);
      setTempItems(updateItems);
      return updateItems;
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
      setTempItems(updateItems);
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
      setTempItems(updateItems);
      return updateItems;
    });
  };

  const searchTodoHandler = (search) => {
    let filteredData = tempItems;
    if (!search.isAll) {
      if (search.title !== "") {
        filteredData = tempItems.filter(
          (x) =>
            x.title.toLowerCase().includes(search.title.toLowerCase()) &&
            x.isActive === search.isActive &&
            x.isCompleted === search.isCompleted
        );
      } else {
        filteredData = tempItems.filter(
          (x) =>
            x.isActive === search.isActive &&
            x.isCompleted === search.isCompleted
        );
      }
    }
    setItems(filteredData);
  };

  return (
    <TodoContext.Provider
      value={{
        items: items,
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
