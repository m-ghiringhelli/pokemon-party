import React, { useEffect, useState } from 'react';
import { fetchPokemon, fetchPokemonTypes, fetchByType } from '../../services/pokemon';
import Pokelist from '../../components/Pokelist/Pokelist';
import Pokeselect from '../../components/Pokeselect/Pokeselect';
import Pokesearch from '../../components/Pokesearch/Pokesearch';
import Alphabetical from '../../components/Alphabetical/Alphabetical';
import './Main.css';

export default function Main() {
  const [pokedex, setPokedex] = useState([]);
  const [pokeTypes, setPokeTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');
  const [searchText, setSearchText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [alphabetized, setAlphabetized] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        //fetch default data
        const typesData = await fetchPokemonTypes();
        setPokeTypes(['all', ...typesData]);
        let data = [];
        if (!selectedType && !alphabetized) {
          data = await fetchPokemon();
          setPokedex(data);
          //if a type is chosen, filter the data
        } else if (selectedType || alphabetized) {
          data = await fetchByType(selectedType, alphabetized);
          setPokedex(data);
        }
        setLoading(false);
      } catch (e) {
        setErrorMessage('Whoopsie-doodle. Something is broken. Try it again maybe?');
      }
    };
    fetchData();
  }, [alphabetized, selectedType]);

  const setPokedexFromSearch = () => {
    setPokedex(pokedex.filter(monster => {
      return monster.pokemon.includes(searchText);
    }));
  };

  if (loading) return <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;

  return (
    <div>
      <p>{errorMessage}</p>
      <div className='controls'>
        <Pokeselect {...{ pokeTypes, setSelectedType }} />
        <Pokesearch {...{ setSearchText, searchText, setPokedex, pokedex, setPokedexFromSearch, setAlphabetized }} />
        <Alphabetical {...{ setAlphabetized }} />
      </div>
      <Pokelist pokedex={pokedex} />
    </div>
  );
}