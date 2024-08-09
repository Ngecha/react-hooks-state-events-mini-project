import React from "react";

function Task({text, category, deleteNode}) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={deleteNode} className="delete">X</button>
    </div>
  );
}

export default Task;
