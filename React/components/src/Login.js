import React from "react";
import useLogin from "./useLogin.js";

export function Login(props) {
  const { name, password, checked, isDisabled, inputHandler } = useLogin();

  return (
    <>
      <input onChange={inputHandler} name="name" type="text" value={name} />
      <input
        onChange={inputHandler}
        name="password"
        type="password"
        value={password}
      />
      <input
        onChange={inputHandler}
        name="remember"
        type="checkbox"
        checked={checked}
      />
      <button
        disabled={name && password ? false : true}
        className={password.length >= 8 ? "green-button" : "red-button"}
      >
        Login
      </button>
    </>
  );
}
