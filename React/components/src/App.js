import React from "react";
import Hello from "./Hello.js";
import Welcome from "./Welcome.js";
import Counter from "./Counter.js";
import ClickCounter from "./ClickCounter.js";
import ClickTracker from "./ClickTracker.js";
import { InteractiveWelcome } from "./InteractiveWelcome.js";

class App extends React.Component {
  render() {
    return (
      <>
        <InteractiveWelcome />
      </>
    );
  }
}

export default App;
