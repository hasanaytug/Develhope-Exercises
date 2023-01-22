import { useState, useEffect } from "react";

export default function useGitHubUser(username) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState("Loading...");

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
      setLoading(null);
    } catch (err) {
      setError(err);
      setUser(null);
    }
  }
  useEffect(() => {
    fetchUserData(username);
  }, [username]);

  return {
    user: user,
    error: error,
    loading,
    loading,
  };
}
