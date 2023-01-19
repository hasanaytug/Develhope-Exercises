import React from "react";

export class Login extends React.Component {
  state = {
    name: "",
    password: "",
    checked: false,
  };
  inputHandler = (e) => {
    const inputType = e.target.type;
    this.setState({
      name: inputType === "text" ? e.target.value : this.state.name,
      password: inputType === "password" ? e.target.value : this.state.password,
      checked: inputType === "checkbox" ? e.target.checked : this.state.checked,
    });
  };
  render() {
    return (
      <>
        <input
          onChange={this.inputHandler}
          name="name"
          type="text"
          value={this.state.name}
        />
        <input
          onChange={this.inputHandler}
          name="password"
          type="password"
          value={this.state.password}
        />
        <input
          onChange={this.inputHandler}
          name="remember"
          type="checkbox"
          checked={this.state.checked}
        />
      </>
    );
  }
}
