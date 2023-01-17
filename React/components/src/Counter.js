import React from "react";

class Counter extends React.Component {
  constructor({ initValue, incInterval, incAmount }) {
    super({ initValue, incInterval, incAmount });
    this.state = {
      counter: initValue,
    };
    setInterval(() => {
      this.setState({
        counter: this.state.counter + incAmount,
      });
    }, incInterval);
  }

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
      </>
    );
  }
}

export default Counter;
