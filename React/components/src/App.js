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
import GitHubUser from "./GitHubUser.js";
import GitHubUserList from "./GitHubUserList.js";
import CarDetails from "./CarDetails.js";

function App() {
  const initialData = {
    model: "Mustang",
    year: "1967",
    color: "red",
  };
  return (
    <div>
      <CarDetails initialData={initialData} />
    </div>
  );
}

export default App;
