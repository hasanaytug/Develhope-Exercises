import { useState, useEffect } from "react";
import useSWR from "swr";

export default function useGitHubUser(username) {
  const fetchData = (url) => fetch(url).then((response) => response.json());

  const { data, error } = useSWR(
    `https://api.github.com/users/${username}`,
    fetchData
  );

  return {
    data: data,
    error: error,
  };
}
