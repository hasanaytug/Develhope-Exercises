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
  onLogin = (data) => {
    console.log(data);
  };

  state = {
    language: "en",
  };

  handleChange = (e) => {
    this.setState({ language: e.target.value });
  };
  render() {
    return (
      <LanguageContext.Provider value={this.state.language}>
        <div>
          <select value={this.state.language} onChange={this.handleChange}>
            <option value="en">English</option>
            <option value="tr">Turkish</option>
          </select>
          <DisplayLanguage />
        </div>
      </LanguageContext.Provider>
    );
  }
}

export default App;
