import React from "react";
import useGitHubUser from "./useGitHubUser";

function GitHubUser({ username }) {
  const { user, error, loading } = useGitHubUser(username);

  return (
    <div>
      {loading && <h1>{loading}</h1>}
      {user && <h1>{user.login}</h1>}
      {error && <h1>Something went wrong</h1>}
    </div>
  );
}

export default GitHubUser;
