import { useEffect, useState } from 'react';

export const useFetch = (word: string) => {
  const [definition, setDefinition] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!word) return;
      await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json())
        .then((data) => {
          setDefinition(data);
        })
        .catch((error) => console.log(error));
    };
    fetchData();
  }, [word]);

  return definition;
};
