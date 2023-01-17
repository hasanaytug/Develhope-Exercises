import React from "react";

export default class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  handleButton = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleButton}>+1</button>
      </>
    );
  }
}
