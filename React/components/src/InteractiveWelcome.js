import React from "react";
import Welcome from "./Welcome";

export class InteractiveWelcome extends React.Component {
  state = {
    name: "",
  };
  inputHandler = (e) => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <>
        <input
          onChange={this.inputHandler}
          type="text"
          value={this.state.name}
        />
        <Welcome name={this.state.name} />
      </>
    );
  }
}
