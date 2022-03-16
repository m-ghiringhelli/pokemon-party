import React, { useEffect, useState } from 'react';
import { fetchPokemon, fetchPokemonTypes } from '../../services/pokemon';

export default function Main() {
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokedex(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemonTypes();
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {pokedex.map((monster) => (
        <div key={monster.id}>
          <p>{monster.pokemon}</p>
        </div>
      ))}
    </div>
  );
}
