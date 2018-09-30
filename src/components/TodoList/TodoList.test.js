import { render, fireEvent, within, getNodeText } from "react-testing-library";
import React from "react";
import TodoList from "./TodoList";

test("should render the given tasks in a list", () => {
  const props = {
    initialTodoList: [
      { name: "task1", isCompleted: true },
      { name: "task2", isCompleted: false }
    ]
  };
  const { container } = render(<TodoList {...props} />);

  const listElement = container.querySelector("ul");
  props.initialTodoList.forEach(task => {
    expect(within(listElement).queryByText(task.name)).toBeInTheDocument();
  });
});

test("should display todo list title", () => {
  const props = {
    initialTodoList: [
      { name: "task1", isCompleted: true },
      { name: "task2", isCompleted: false }
    ]
  };
  const { getByText } = render(<TodoList {...props} />);
  expect(getByText("My To Do List")).toBeInTheDocument();
});

test("should be able to mark a task as done", () => {
  const props = {
    initialTodoList: [{ name: "task1", isCompleted: false }]
  };
  const { container } = render(<TodoList {...props} />);

  const taskActionButton = container.querySelector("ul li button");

  expect(getNodeText(taskActionButton)).toEqual("Done");

  fireEvent.click(taskActionButton);

  expect(getNodeText(taskActionButton)).toEqual("Undo");
});

test("should be able to mark a task as todo", () => {
  const props = {
    initialTodoList: [{ name: "task1", isCompleted: true }]
  };
  const { container } = render(<TodoList {...props} />);

  const taskActionButton = container.querySelector("ul li button");

  expect(getNodeText(taskActionButton)).toEqual("Undo");

  fireEvent.click(taskActionButton);

  expect(getNodeText(taskActionButton)).toEqual("Done");
});

test("should be able to add new tasks to the list", () => {
  const props = {
    initialTodoList: []
  };
  const { container } = render(<TodoList {...props} />);

  const initialTasks = container.querySelectorAll("ul li");

  expect(initialTasks).toHaveLength(0);

  const todoCreationBar = container.querySelector("#new-todo-form");

  fireEvent.change(within(todoCreationBar).getByLabelText("New Task"), {
    target: { value: "task1" }
  });

  fireEvent.click(within(todoCreationBar).getByText("Add"));

  const currentTasks = container.querySelectorAll("ul li");

  expect(currentTasks).toHaveLength(1);
});
