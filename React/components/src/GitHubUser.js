import React, { useEffect, useState } from "react";

function GitHubUser({ username }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  async function fetchUserData(username) {
    try {
      const responce = await fetch(`https://api.github.com/users/${username}`);
      if (responce.status !== 200) {
        setError("Error");
      }
      const json = await responce.json();

      setUser(json);
    } catch (err) {
      setError(err);
    }
  }
  useEffect(() => {
    fetchUserData(username);
  }, [username]);

  return (
    <div>
      {user && <h1>{user.login}</h1>}
      {error && <h1>Something went wrong</h1>}
    </div>
  );
}

export default GitHubUser;
