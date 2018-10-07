import React, { Component } from "react";
import { hashCode } from "../../util";
import ToDoItem from "../TodoItem/TodoItem";
import TodoCreationBar from "../TodoCreationBar/TodoCreationBar";
import TodoFilterBar from "../TodoFilterBar/TodoFilterBar";

export default class TodoList extends Component {
  state = {
    filter: "",
    todos: this.props.initialTodoList
  };

  toggleTaskState = (item, event) => {
    item.isCompleted = !item.isCompleted;
    this.setState({ todos: this.state.todos });
  };

  addNewTask = taskName => {
    const newTask = { name: taskName, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTask] });
  };

  setFilter = filter => {
    this.setState({
      filter: filter
    });
  };

  clearFilter = () => this.setFilter("");

  render() {
    let tasksToDisplay = this.state.todos;

    if (this.state.filter !== "") {
      const filterRegex = new RegExp(this.state.filter, "i");
      tasksToDisplay = tasksToDisplay.filter(task =>
        filterRegex.test(task.name)
      );
    }
    return (
      <div>
        <div>My To Do List</div>
        <TodoCreationBar addNewTask={this.addNewTask} />
        <ul>
          {tasksToDisplay.map(item => {
            return (
              <ToDoItem
                key={hashCode(item.name)}
                toggleTaskStatus={this.toggleTaskState.bind(this, item)}
                {...item}
              />
            );
          })}
        </ul>
        <TodoFilterBar
          setFilter={this.setFilter}
          clearFilter={this.clearFilter}
        />
      </div>
    );
  }
}
