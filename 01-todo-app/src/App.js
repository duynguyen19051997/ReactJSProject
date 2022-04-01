import { Todo } from "./components/Todo/Todo";

import "./App.css";
import { TodoContextProvider } from "./components/context/todo-context";

function App() {
  return (
    <div className="App">
      <TodoContextProvider>
        <Todo />
      </TodoContextProvider>
    </div>
  );
}

export default App;
