import React, { createRef } from "react";

export class Login extends React.Component {
  _formRef = createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    const form = this._formRef.current;
    console.log({
      name: form.name.value,
      password: form.password.value,
      remember: form.remember.checked,
    });
  };

  handleChange = (e) => {
    if (
      this._formRef.current.name.value &&
      this._formRef.current.password.value
    ) {
      this._formRef.current.login.disabled = false;
    }
    return;
  };

  render() {
    return (
      <>
        <form ref={this._formRef} onSubmit={this.handleSubmit} action="">
          <input
            autoFocus="true"
            name="name"
            type="text"
            onChange={this.handleChange}
          />
          <input name="password" type="password" onChange={this.handleChange} />
          <input name="remember" type="checkbox" />
          <button name="login" type="submit" disabled="true">
            Login
          </button>
          <button type="reset">Reset</button>
        </form>
      </>
    );
  }
}
