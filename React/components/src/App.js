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
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome name={"hasan"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
