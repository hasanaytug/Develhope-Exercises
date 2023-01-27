import React, { useState } from "react";
import { store } from "./state/Store.js";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "./state/CounterState";

export default function ClickCounter() {
  const handleButton = (e) => {
    if (e.target.innerHTML === "+1") {
      store.dispatch(incrementCounter());
    } else if (e.target.innerHTML === "-1") {
      store.dispatch(decrementCounter());
    } else {
      store.dispatch(resetCounter());
    }
    console.log(store.getState());
  };

  return (
    <>
      <h1>{state}</h1>
      <button onClick={handleButton}>+1</button>
      <button onClick={handleButton}>-1</button>
      <button onClick={handleButton}>reset</button>
    </>
  );
}
