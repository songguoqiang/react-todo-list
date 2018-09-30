import React, { Component } from "react";
import { hashCode } from "./util";
import ToDoItem from "./TodoItem";
import TodoCreationBar from "./TodoCreationBar";

export default class TodoList extends Component {

  state = {
    todos: this.props.initialTodoList
  };

  toggleTaskState = (item, event) => {
    item.isCompleted = !item.isCompleted;
    this.setState({ todos: this.state.todos });
  };

  addNewTask = taskName => {
    this.state.todos.push({ name: taskName, isCompleted: false });
    this.setState({ todos: this.state.todos });
  };

  render() {
    return (
      <div>
        <div>My To Do List</div>
        <TodoCreationBar addNewTask={this.addNewTask} />
        <ul>
          {this.state.todos.map(item => {
            return (
              <ToDoItem
                key={hashCode(item.name)}
                toggleTaskStatus={this.toggleTaskState.bind(this, item)}
                {...item}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
