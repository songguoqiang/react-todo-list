import React from "react";
import "./TodoItem.css";

export default ({ name, isCompleted, toggleTaskStatus }) => {
  let className = "todo-item ";
  let buttonText = "Done";

  if (isCompleted) {
    className += "done";
    buttonText = "Undo";
  }

  return (
    <li>
      <span className={className}>{name}</span>
      <button onClick={toggleTaskStatus}>{buttonText}</button>
    </li>
  );
};
