import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <>
        <p>Welcome {this.props.name}!</p>
        <p>Your age is {this.props.age}</p>
      </>
    );
  }
}

Welcome.defaultProps = {
  name: "Handsome",
};

export default Welcome;
