import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <div>
        <h1>Мой список задач</h1>
        <ul>
          {tasks.map((task, index) => (
            <ToDoItem
              key={index}
              task={task}
              index={index}
              removeTask={removeTask}
            />
          ))}
        </ul>
        <form
          className="form-container"
          onSubmit={(e) => {
            e.preventDefault();
            addTask();
          }}
        >
          <input
            onChange={(e) => setTask(e.target.value)}
            value={task}
            type="text"
            placeholder="Введите новую задачу"
          />
          <button type="submit">Добавить задачу</button>
        </form>
      </div>
    </div>
  );
}

export default ToDoList;
