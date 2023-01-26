import { useState, useEffect } from "react";
import useSWR from "swr";

export default function useGitHubUser(username) {
  const fetchData = (url) => fetch(url).then((response) => response.json());

  const shouldFetch = username !== null ? true : false;

  const { data, error } = useSWR(
    shouldFetch ? `https://api.github.com/users/${username}` : null,
    fetchData
  );

  return {
    data: data,
    error: error,
  };
}
