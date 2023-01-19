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
  handleDeleteItem = (item) => {
    const filteredItems = this.state.items.filter((note) => {
      return item != note;
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
        <ul>
          {this.state.items.map((item) => {
            return (
              <div>
                <li>{item}</li>
                <button
                  onClick={() => {
                    this.handleDeleteItem(item);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </ul>
        <button onClick={this.handleClick}>Add</button>
        <button onClick={this.handleReset}>Reset</button>
      </>
    );
  }
}
