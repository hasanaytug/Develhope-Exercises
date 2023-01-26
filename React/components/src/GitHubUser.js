import React from "react";
import useGitHubUser from "./useGitHubUser";

function GitHubUser({ username }) {
  const { data, error } = useGitHubUser(username);

  return (
    <div>
      {!data && !error && <h1>Loading...</h1>}
      {data && <h1>Username is: {data.login}</h1>}
      {error && <h1>Something went wrong</h1>}
    </div>
  );
}

export default GitHubUser;
