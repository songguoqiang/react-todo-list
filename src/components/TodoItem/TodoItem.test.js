// @ts-nocheck
import { render, fireEvent, getNodeText } from "react-testing-library";
import React from "react";
import TodoItem from "./TodoItem";

test("should render a task as li element", () => {
  const props = {
    name: "task name",
    isCompleted: false,
    toggleTaskStatus: jest.fn()
  };
  const { container } = render(<TodoItem {...props} />);
  expect(container.firstChild.tagName).toEqual("LI");
});

test("rendering an incomplete task", () => {
  const props = {
    name: "task name",
    isCompleted: false,
    toggleTaskStatus: jest.fn()
  };
  const { container, getByText } = render(<TodoItem {...props} />);
  expect(getByText(props.name)).toHaveClass("todo-item");
  expect(getByText(props.name)).not.toHaveClass("done");

  expect(container.querySelector("button").textContent).toEqual("Done");
});

test("rendering a completed task", () => {
  const props = {
    name: "task name",
    isCompleted: true,
    toggleTaskStatus: jest.fn()
  };
  const { container, getByText } = render(<TodoItem {...props} />);
  expect(getByText(props.name)).toHaveClass("todo-item");
  expect(getByText(props.name)).toHaveClass("done");
  expect(container.querySelector("button").textContent).toEqual("Undo");
});

test("should toggle task status when the button is clicked", () => {
  const props = {
    name: "task name",
    isCompleted: false,
    toggleTaskStatus: jest.fn()
  };
  const { container } = render(<TodoItem {...props} />);
  fireEvent.click(container.querySelector("button"));

  expect(props.toggleTaskStatus).toHaveBeenCalledTimes(1);
});
