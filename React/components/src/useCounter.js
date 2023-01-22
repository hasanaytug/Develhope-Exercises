import { useState } from "react";

export default function useCounter() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };
  const handleDecrement = () => {
    setCounter((counter) => counter - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };

  return {
    counter: counter,
    handleIncrement: handleIncrement,
    handleDecrement: handleDecrement,
    handleReset: handleReset,
  };
}
