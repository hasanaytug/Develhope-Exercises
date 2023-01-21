import React from "react";

function Sum({ nums = [1, 2, 3, 4, 5] }) {
  return <h1>{nums.reduce((acc, num) => acc + num)}</h1>;
}

export default Sum;
