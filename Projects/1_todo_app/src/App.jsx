import AddTodo from "./Components/AddTodo.jsx";
import AppName from "./Components/AppName.jsx";
import TodoItem1 from "./Components/TodoItem1.jsx";
import TodoItem2 from "./Components/TodoItem2.jsx";

function App() {
  return (
    <div>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItem1 />
        <TodoItem2 />
      </center>
    </div>
  );
}

export default App;
