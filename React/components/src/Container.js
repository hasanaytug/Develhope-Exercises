import React from "react";

export class Container extends React.Component {
  render() {
    const styling = {
      backgroundColor: "white",
      border: "1px solid red",
    };
    return (
      <div style={styling}>
        <div className="title">{this.props.title}</div>
        {this.props.children}
      </div>
    );
  }
}
