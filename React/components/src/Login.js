import React, { useState } from "react";

export function Login(props) {
  const [user, setUser] = useState({
    name: "",
    password: "",
    checked: false,
    isDisabled: true,
  });

  const inputHandler = (e) => {
    const inputType = e.target.type;
    setUser({
      name: inputType === "text" ? e.target.value : user.name,
      password: inputType === "password" ? e.target.value : user.password,
      checked: inputType === "checkbox" ? e.target.checked : user.checked,
    });
  };

  return (
    <>
      <input
        onChange={inputHandler}
        name="name"
        type="text"
        value={user.name}
      />
      <input
        onChange={inputHandler}
        name="password"
        type="password"
        value={user.password}
      />
      <input
        onChange={inputHandler}
        name="remember"
        type="checkbox"
        checked={user.checked}
      />
      <button
        onClick={() => {
          props.onLogin(user);
        }}
        disabled={user.name && user.password ? false : true}
        className={user.password.length >= 8 ? "green-button" : "red-button"}
      >
        Login
      </button>
    </>
  );
}
