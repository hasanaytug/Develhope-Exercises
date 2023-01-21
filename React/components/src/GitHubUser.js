import React, { useEffect, useState } from "react";

function GitHubUser({ username }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  async function fetchUserData(username) {
    try {
      setError(null);
      const responce = await fetch(`https://api.github.com/users/${username}`);
      if (responce.status !== 200) {
        setError("Error");
        setUser(null);
      }
      const json = await responce.json();

      setUser(json);
    } catch (err) {
      setError(err);
      setUser(null);
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
