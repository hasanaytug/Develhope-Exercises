import React from "react";

export class ToDoList extends React.Component {
  state = {
    items: [],
    note: "",
  };
  handleChange = (e) => {
    this.setState({ note: e.target.value });
  };
  handleClick = () => {
    this.setState({ items: [...this.state.items, this.state.note] });
    this.setState({ note: "" });
  };
  handleReset = () => {
    this.setState({ items: [] });
  };
  handleDeleteItems = (e) => {
    const filteredItems = this.state.items.filter((note) => {
      return e.target.id != note;
    });
    this.setState({
      items: filteredItems,
    });
  };

  render() {
    return (
      <>
        <input
          onChange={this.handleChange}
          value={this.state.note}
          type="text"
        />
        <ul>{this.props.render(this.state.items, this.handleDeleteItems)}</ul>
        <button onClick={this.handleClick}>Add</button>
        <button onClick={this.handleReset}>Reset</button>
      </>
    );
  }
}
