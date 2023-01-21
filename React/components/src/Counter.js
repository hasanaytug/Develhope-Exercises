import React, { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

function Counter({ initValue, incInterval, incAmount }) {
  const [counter, setCounter] = useState(initValue);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCounter(counter + incAmount);
    }, incInterval);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <>
      <CounterDisplay count={counter} />
    </>
  );
}

export default Counter;
