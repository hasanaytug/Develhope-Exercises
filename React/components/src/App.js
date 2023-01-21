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
      <ClickCounter onCounterChange={onCounterChange}></ClickCounter>
    </div>
  );
}

export default App;
