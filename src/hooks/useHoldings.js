import { useCallback, useEffect, useState } from "react";
import { fetchHoldings } from "../api/holdings.api";

export function useHoldings() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadHoldings = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetchHoldings();
      setData(response);
    } catch (err) {
      setError(err?.message || "Failed to load holdings.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadHoldings();
  }, [loadHoldings]);

  return {
    data,
    loading,
    error,
    refetch: loadHoldings,
  };
}