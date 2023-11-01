import { useEffect, useState } from "react";
import Characters from "./Characters";

function List() {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch('https://rickandmortyapi.com/api/character');
      const { results } = await data.json();
      setCharacters(results);
      setLoading(false);
    }
    fetchData();
  }, [characters.length]);

  return (
    <div className="max-w-5xl mx-auto p-10 bg-gray-100">
      <h2 className="font-medium text-gray-500 text-3xl mb-6">Characters</h2>
    <div className=" grid grid-cols-1  sm:grid-cols-3 place-content-center gap-3">
      {loading ? (
        <div> Loading....</div>
      ) : (
        characters.map((character) => (
          <Characters key={character.id} name={character.name} origin={character.origin} image={character.image} />
        ))
      )}
    </div>
    </div>
  );
}

export default List;
