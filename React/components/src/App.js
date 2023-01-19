import React from "react";
import Hello from "./Hello.js";
import Welcome from "./Welcome.js";
import Counter from "./Counter.js";
import ClickCounter from "./ClickCounter.js";
import ClickTracker from "./ClickTracker.js";
import { InteractiveWelcome } from "./InteractiveWelcome.js";
import { Login } from "./Login.js";

class App extends React.Component {
  onLogin = (data) => {
    console.log(data);
  };

  render() {
    return (
      <>
        <Login onLogin={this.onLogin} />
      </>
    );
  }
}

export default App;
