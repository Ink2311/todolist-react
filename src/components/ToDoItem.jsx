import React from "react";

function ToDoItem({ task, index, removeTask }) {
  return (
    <li>
      {task}
      <button onClick={() => removeTask(index)}>✔</button>
    </li>
  );
}

export default ToDoItem;