// @ts-nocheck
import {render, fireEvent, } from 'react-testing-library'
import React from "react";
import TodoCreationBar from "./TodoCreationBar";

test("a new todo task will be created when user clicks the add button", () => {
  const addNewTaskCallback = jest.fn();
  const {getByLabelText, getByText} = render(<TodoCreationBar addNewTask={addNewTaskCallback} />);
  const newTaskName = "Test Task";
  fireEvent.change(getByLabelText("New Task"), { target: {value: newTaskName} })
  fireEvent.click(getByText("Add"));

  expect(addNewTaskCallback).toHaveBeenCalledTimes(1);
  expect(addNewTaskCallback).toHaveBeenCalledWith(newTaskName);
})