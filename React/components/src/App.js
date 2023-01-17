import React from "react";
import Hello from "./Hello.js";
import Welcome from "./Welcome.js";
import Counter from "./Counter.js";

class App extends React.Component {
  render() {
    return (
      <>
        <Counter initValue={15} incInterval={300} incAmount={2} />
      </>
    );
  }
}

export default App;
