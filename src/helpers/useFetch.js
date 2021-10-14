import { useEffect, useState, useCallback } from "react";
import { movieClient } from "./apiClient";

const useFetch = ({ url, params }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = useCallback(async (u, p) => {
    try {
      setError("");
      await setLoading(true);
      const res = await movieClient.getWithToken(u, p);
      await setData(res);
    } catch (err) {
      await setError(err.message);
    }
    await setLoading(false);
  }, []);

  useEffect(() => {
    fetchData(url, params);
  }, [fetchData, url, params]);

  return [data, loading, error, fetchData];
};

export default useFetch;
