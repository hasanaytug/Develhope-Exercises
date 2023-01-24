import { useState, useCallback } from "react";

export default function useCounter() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = useCallback(() => {
    setCounter((counter) => counter + 1);
  }, []);
  const handleDecrement = useCallback(() => {
    setCounter((counter) => counter - 1);
  }, []);
  const handleReset = useCallback(() => {
    setCounter(0);
  }, []);

  return {
    counter: counter,
    handleIncrement: handleIncrement,
    handleDecrement: handleDecrement,
    handleReset: handleReset,
  };
}
