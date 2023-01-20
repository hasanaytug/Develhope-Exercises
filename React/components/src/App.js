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

class App extends React.Component {
  onLogin = (data) => {
    console.log(data);
  };
  render() {
    return (
      <ToDoList
        render={(items, handleDeleteItems) => {
          return items.map((item) => {
            return (
              <div key={Math.floor(Math.random() * 1000)}>
                <li>
                  {item}&nbsp;&nbsp;
                  <button id={item} onClick={handleDeleteItems}>
                    Delete
                  </button>
                </li>
              </div>
            );
          });
        }}
      ></ToDoList>
    );
  }
}

export default App;
