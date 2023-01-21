import React, { useState } from "react";
import GitHubUser from "./GitHubUser";

function GitHubUserList() {
  const [userList, setUserList] = useState([]);
  const [name, setName] = useState([]);

  const handleInput = (e) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    setUserList([...userList, name]);
  };
  return (
    <div>
      <input value={name} onChange={handleInput} type="text" />
      <button onClick={handleClick}>Add User</button>
      {userList.map((user) => (
        <GitHubUser username={user}></GitHubUser>
      ))}
    </div>
  );
}

export default GitHubUserList;
