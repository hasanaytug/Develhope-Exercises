import React, { useState } from "react";

export default function ClickCounter() {
  const [counter, setCounter] = useState(0);
  const handleButton = () => {
    setCounter((counter) => counter + 1);
  };
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleButton}>+1</button>
    </>
  );
}
