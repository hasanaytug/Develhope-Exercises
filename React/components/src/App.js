import React from "react";
import Hello from "./Hello.js";
import Welcome from "./Welcome.js";
import Counter from "./Counter.js";
import ClickCounter from "./ClickCounter.js";

class App extends React.Component {
  render() {
    return (
      <>
        <ClickCounter />
      </>
    );
  }
}

export default App;
