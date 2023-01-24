import React, { useState } from "react";
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
import DisplayLanguage from "./DisplayLanguage";
import Sum from "./Sum";
import GitHubUser from "./GitHubUser.js";
import GitHubUserList from "./GitHubUserList.js";
import CarDetails from "./CarDetails.js";
import FilteredList from "./FilteredList.js";

function App() {
  const users = [
    { name: "John", email: "john@somemail.com", age: 25 },
    { name: "Mary", email: "mary@somemail.com", age: 16 },
    { name: "Steve", email: "steve@somemail.com", age: 22 },
    { name: "Nick", email: "nick@somemail.com", age: 19 },
  ];
  return <FilteredList users={users} />;
}

export default App;
