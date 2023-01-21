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

class App extends React.Component {
  render() {
    return <Welcome name={"Hasan"} age={34}></Welcome>;
  }
}

export default App;
