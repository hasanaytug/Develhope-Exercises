import React, { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initValue, incInterval, incAmount }) {
  const [counter, setCounter] = useState(initValue);
  useEffect(() => {
    const counterInverval = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, incInterval);
    return () => clearInterval(counterInverval);
  }, []);

  return (
    <>
      <CounterDisplay count={counter} />
    </>
  );
}

export default Counter;
