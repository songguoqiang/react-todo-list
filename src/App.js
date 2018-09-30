import React, { Component } from "react";
import TodoList from "./TodoList";
import { todos as initialTodoList } from "./seedData";

class App extends Component {
  render() {
    return <TodoList initialTodoList={initialTodoList} />;
  }
}

export default App;
