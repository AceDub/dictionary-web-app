import { useEffect, useState } from 'react';

export const useFetch = (word: string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!word) return;
      setLoading(true);
      setError(null);
      setData(null);
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
      );
      const data = await response.json();
      if (response.ok) {
        setData(data);
      }
      if (!response.ok) {
        setError(data);
      }
      setLoading(false);
    };
    fetchData();
  }, [word]);

  return { data, error, loading };
};
