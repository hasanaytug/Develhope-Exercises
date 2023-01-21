import React from "react";
import Hello from "./Hello.js";
import Welcome from "./Welcome.js";
import Counter from "./Counter.js";
import ClickCounter from "./ClickCounter.js";
import ClickTracker from "./ClickTracker.js";
import { InteractiveWelcome } from "./InteractiveWelcome.js";
import { Login } from "./Login.js";
import { ToDoList } from "./ToDoList";
import { Container } from "./Container";
import LanguageContext from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguage";
import Sum from "./Sum";

function App() {
  const onCounterChange = (count) => {
    console.log(`The counter is at: ${count}`);
  };
  return (
    <div>
      <Counter initValue={0} incInterval={1000} incAmount={1} />
    </div>
  );
}

export default App;
