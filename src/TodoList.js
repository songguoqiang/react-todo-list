import React, { Component } from "react";
import { todos as initialTodoList } from "./seedData";
import { hashCode } from "./util";
import ToDoItem from "./TodoItem";

export default class TodoList extends Component {
  state = {
    todos: initialTodoList
  };

  toggleTaskState = (item, event) => {
    item.isCompleted = !item.isCompleted;
    this.setState({ todos: this.state.todos });
  };

  render() {
    return (
      <div>
        <div>My To Do List</div>
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
