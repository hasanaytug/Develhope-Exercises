import React from "react";
import CounterDisplay from "./CounterDisplay";

class Counter extends React.Component {
  constructor({ initValue, incInterval, incAmount }) {
    super({ initValue, incInterval, incAmount });
    this.state = {
      counter: initValue,
    };
  }
  // We need the constructor for , props
  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + this.props.incAmount,
      });
    }, this.props.incInterval);
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
