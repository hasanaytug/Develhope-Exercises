import React from "react";
import CounterDisplay from "./CounterDisplay";

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
        <CounterDisplay count={this.state.counter} />
      </>
    );
  }
}

export default Counter;
