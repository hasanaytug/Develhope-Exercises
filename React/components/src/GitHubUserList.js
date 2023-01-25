import React, { useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
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
      <br></br>
      <hr></hr>
      {userList.map((user) => (
        <div>
          <Link to={`${user}`}>{user}</Link>
          <br></br>
        </div>
      ))}

      <hr />
      <Outlet />
    </div>
  );
}

export default GitHubUserList;
