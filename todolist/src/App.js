import './App.css';
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    setTodoList([...todoList, { id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1, taskName: newTask }]);
    setNewTask(""); // Clear the input field after adding the task
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} value={newTask} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div key={task.id}>
              <h1>{task.taskName}</h1>
              <button onClick={() => deleteTask(task.id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
