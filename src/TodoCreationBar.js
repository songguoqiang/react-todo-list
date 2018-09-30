import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TodoCreationBar.css";

export default class TodoCreationBar extends Component {
  static propTypes = {
    addNewTask: PropTypes.func.isRequired
  };

  setNewTaskName = (event) => {
    this.setState({newTaskName: event.target.value});
  }

  addNewTaskToList = (event) => {
    if (this.state.newTaskName !== "") {
      this.props.addNewTask(this.state.newTaskName);
      this.setState({newTaskName: ""})
    }
    event.preventDefault();
  };

  state = {
    newTaskName: ""
  };

  render() {
    return (
      <form id="new-todo-form">
        <label htmlFor="new-todo-name">New Tasks</label>
        <input id="new-todo-name" type="text" value={this.state.newTaskName} onChange={this.setNewTaskName}/>
        <input type="submit" value="Add" onClick={this.addNewTaskToList} />
      </form>
    );
  }
}
