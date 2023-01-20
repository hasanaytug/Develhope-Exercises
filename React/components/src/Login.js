import React from "react";

export class Login extends React.Component {
  state = {
    name: "",
    password: "",
    checked: false,
    isDisabled: true,
  };

  constructor(props) {
    super(props);
  }

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
          onFocus={this.handleFocused}
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
        <button
          onClick={() => {
            this.props.onLogin(this.state);
          }}
          disabled={this.state.name && this.state.password ? false : true}
          className={
            this.state.password.length >= 8 ? "green-button" : "red-button"
          }
        >
          Login
        </button>
      </>
    );
  }
}
