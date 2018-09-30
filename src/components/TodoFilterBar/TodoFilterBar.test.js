import { render, fireEvent, within, getNodeText } from "react-testing-library";
import React from "react";
import TodoFilterBar from "./TodoFilterBar";

test('should render with a search field and two buttons', () => {
  const props = {
    setFilter: jest.fn(),
    clearFilter: jest.fn()
  }

  const {getByLabelText, getByText} = render(<TodoFilterBar {...props} />);

  expect(getByLabelText("Task Filter")).toBeInTheDOM();

  const setFilterButton = getByText("Filter Tasks")
  expect(setFilterButton).toBeInTheDOM();

  const clearFilterButton = getByText("Clear Filter")
  expect(clearFilterButton).toBeInTheDOM();
})

test('should invoke callback when users click filter tasks button', () => {
  const props = {
    setFilter: jest.fn(),
    clearFilter: jest.fn()
  }

  const {getByLabelText, getByText} = render(<TodoFilterBar {...props} />);

  const filterField = getByLabelText("Task Filter");
  fireEvent.change(filterField, {target: {value: "test filter"}});

  const setFilterButton = getByText("Filter Tasks")
  fireEvent.click(setFilterButton);

  expect(props.setFilter).toHaveBeenCalledTimes(1);
  expect(props.setFilter).toHaveBeenCalledWith("test filter");
  
})

test('should invoke callback when users click clear filter button', () => {
  const props = {
    setFilter: jest.fn(),
    clearFilter: jest.fn()
  }

  const {getByText} = render(<TodoFilterBar {...props} />);

  const clearFilterButton = getByText("Clear Filter")
  fireEvent.click(clearFilterButton);

  expect(props.clearFilter).toHaveBeenCalledTimes(1);
  
})
