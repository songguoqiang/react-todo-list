import React from "react";
import PropTypes from "prop-types";

class TodoFilterBar extends React.Component {
  state = {
    filter : ""
  }

  saveFilter = (event) => {
    this.setState({filter: event.target.value});
  }

  filterTasks = () => {
    this.props.setFilter(this.state.filter)
  }

  clearFilter = () => {
    this.props.clearFilter();
  }

  render() {
    return (
      <form>
        <label htmlFor="task-filter-input">Task Filter</label>
        <input type="text" id="task-filter-input" value={this.state.filter} onChange={this.saveFilter}/>
        <button onClick={this.filterTasks}>Filter Tasks</button>
        <button onClick={this.clearFilter}>Clear Filter</button>
      </form>
    );
  }
}

TodoFilterBar.propTypes = {
  setFilter: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired
};

export default TodoFilterBar;
