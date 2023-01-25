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
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import NotFound from "./NotFound.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Homepage</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/users/hasanaytug">User Page</Link>
        <Routes>
          <Route path="*" element={<NotFound></NotFound>} />
          <Route path="/" element={<Welcome name={"hasan"} />} />

          <Route
            path="/counter"
            element={<Counter initValue={0} incInterval={1000} incAmount={1} />}
          />
          <Route path="users/:username" element={<GitHubUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
