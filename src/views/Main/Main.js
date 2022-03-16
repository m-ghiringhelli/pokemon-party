import React, { useEffect, useState } from 'react';
import { fetchPokemon, fetchPokemonTypes } from '../../services/pokemon';
import Pokelist from '../../components/Pokelist/Pokelist';
import Pokeselect from '../../components/Pokeselect/Pokeselect';

export default function Main() {
  const [pokedex, setPokedex] = useState([]);
  const [pokeTypes, setPokeTypes] = useState([]);

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
      setPokeTypes(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Pokeselect pokeTypes={pokeTypes}/>
      <Pokelist pokedex={pokedex} />
    </div>
  );
}
