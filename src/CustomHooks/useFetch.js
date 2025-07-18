import { useEffect, useState } from "react";
export function useFetch(url) {
  const [character, setCharacter] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getCharacters = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setCharacter(data.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getCharacters();
  }, [url]);
  return { character, setCharacter, isLoading };
}
