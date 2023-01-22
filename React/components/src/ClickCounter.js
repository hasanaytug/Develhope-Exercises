import React, { useState, useEffect } from "react";
import useCounter from "./useCounter.js";

export default function ClickCounter() {
  const { counter, handleIncrement, handleDecrement, handleReset } =
    useCounter();
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleIncrement}>+1</button>
      <button onClick={handleDecrement}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}
