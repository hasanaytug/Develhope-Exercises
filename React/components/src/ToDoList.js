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
            return <li>{item}</li>;
          })}
        </ul>
        <button onClick={this.handleClick}>Add</button>
      </>
    );
  }
}
