import React from "react";
import Hello from "./Hello.js";
import Welcome from "./Welcome.js";

class App extends React.Component {
  render() {
    return (
      <>
        <Hello />
        <Welcome name={<strong>Hasan</strong>} age="34" />
      </>
    );
  }
}

export default App;
