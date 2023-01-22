import { useState } from "react";

export default function useLogin() {
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

  return {
    name: user.name,
    password: user.password,
    checked: user.checked,
    isDisabled: user.isDisabled,
    inputHandler: inputHandler,
  };
}
