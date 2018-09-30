import { render, fireEvent, getNodeText } from "react-testing-library";
import React from "react";
import TodoItem from "./TodoItem";

test("should render a task a li", () => {
  const props = {
    name: "task name",
    isCompleted: false,
    toggleTaskStatus: jest.fn()
  };
  const { container, getByText } = render(<TodoItem {...props} />);
  expect(container.querySelectorAll("li")).toHaveLength(1);
});

test("should render an incomplete task", () => {
  const props = {
    name: "task name",
    isCompleted: false,
    toggleTaskStatus: jest.fn()
  };
  const { container, getByText } = render(<TodoItem {...props} />);
  expect(getByText(props.name)).toHaveClass("todo-item");
  expect(getByText(props.name)).not.toHaveClass("done");

  expect(getNodeText(container.querySelector("button"))).toEqual("Done");
});

test("should render an complete task", () => {
  const props = {
    name: "task name",
    isCompleted: true,
    toggleTaskStatus: jest.fn()
  };
  const { container, getByText } = render(<TodoItem {...props} />);
  expect(getByText(props.name)).toHaveClass("todo-item");
  expect(getByText(props.name)).toHaveClass("done");
  expect(getNodeText(container.querySelector("button"))).toEqual("Undo");
});

test("should toggle task status when the button is clicked", () => {
  const props = {
    name: "task name",
    isCompleted: false,
    toggleTaskStatus: jest.fn()
  };
  const { container, getByText } = render(<TodoItem {...props} />);
  fireEvent.click(container.querySelector("button"));

  expect(props.toggleTaskStatus).toHaveBeenCalledTimes(1);
});
