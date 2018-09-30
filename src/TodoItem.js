import React from "react";
import "./TodoItem.css";
import PropTypes from 'prop-types'; 

const TodoItem = ({ name, isCompleted, toggleTaskStatus }) => {
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

TodoItem.propTypes = {
    name: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    toogleTaskStatus: PropTypes.func.isRequired
  };

  export default TodoItem;