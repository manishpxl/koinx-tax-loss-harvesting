import { useCallback, useEffect, useState } from "react";
import { fetchCapitalGains } from "../api/capitalGains.api";

export function useCapitalGains() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadCapitalGains = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetchCapitalGains();
      setData(response);
    } catch (err) {
      setError(err?.message || "Failed to load capital gains.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCapitalGains();
  }, [loadCapitalGains]);

  return {
    data,
    loading,
    error,
    refetch: loadCapitalGains,
  };
}