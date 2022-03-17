import React, { useEffect, useState } from 'react';
import { fetchPokemon, fetchPokemonTypes, fetchByType } from '../../services/pokemon';
import Pokelist from '../../components/Pokelist/Pokelist';
import Pokeselect from '../../components/Pokeselect/Pokeselect';
import Pokesearch from '../../components/Pokesearch/Pokesearch';
import './Main.css';

export default function Main() {
  const [pokedex, setPokedex] = useState([]);
  const [pokeTypes, setPokeTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchPokemon();
      setPokedex(data);
      const typesData = await fetchPokemonTypes();
      setPokeTypes(typesData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchByType(selectedType);
      if (selectedType) setPokedex(data);
    };
    fetchData();
  }, [selectedType]);

  const setPokedexFromSearch = () => {
    setPokedex(pokedex.filter(monster => {
      console.log(searchText);
      return monster.pokemon.includes(searchText);
    }));
  };

  return (
    <div>
      <div className='controls'>
        <Pokeselect {...{ pokeTypes, setSelectedType }}/>
        <Pokesearch {...{ setSearchText, searchText, setPokedex, pokedex, setPokedexFromSearch }} />
      </div>
      <Pokelist pokedex={pokedex} />
    </div>
  );
}