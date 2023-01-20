import React from "react";

export class Container extends React.Component {
  render() {
    const styling = {
      backgroundColor: "white",
      border: "1px solid red",
    };
    return <div style={styling}>{this.props.children}</div>;
  }
}
