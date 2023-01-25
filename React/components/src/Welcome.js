import React from "react";
import Age from "./Age";
import { Link } from "react-router-dom";

function Welcome({ name, age }) {
  return (
    <div className="welcome">
      <p>Welcome {name}!</p>
      <Age age={age} />
    </div>
  );
}

export default Welcome;
