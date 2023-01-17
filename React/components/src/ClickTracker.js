import React from "react";

export default class ClickTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonName: "",
    };
  }
  handleButtons = (e) => {
    this.setState({ buttonName: e.target.innerHTML + " button clicked" });
  };
  render() {
    return (
      <>
        <h1>{this.state.buttonName}</h1>
        <button onClick={this.handleButtons}>first</button>
        <button onClick={this.handleButtons}>second</button>
        <button onClick={this.handleButtons}>third</button>
      </>
    );
  }
}
