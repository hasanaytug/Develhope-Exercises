import React from "react";

function Sum({ nums }) {
  return <h1>{nums.reduce((acc, num) => acc + num)}</h1>;
}

export default Sum;
