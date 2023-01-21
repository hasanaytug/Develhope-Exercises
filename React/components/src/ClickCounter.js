import React, { useState, useEffect } from "react";

export default function ClickCounter({ onCounterChange }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    onCounterChange(counter);
  }, [counter]);
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
