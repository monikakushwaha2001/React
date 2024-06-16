import AddTodo from "./Components/AddTodo.jsx";
import AppName from "./Components/AppName.jsx";
import TodoItem1 from "./Components/TodoItem1.jsx";
import TodoItem2 from "./Components/TodoItem2.jsx";
import "./App.css";
function App() {
  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <div className="items-container">
          <TodoItem1 />
          <TodoItem2 />
        </div>
      </center>
    </div>
  );
}

export default App;
