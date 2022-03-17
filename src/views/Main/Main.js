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
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPokemon();
        setPokedex(data);
        const typesData = await fetchPokemonTypes();
        setPokeTypes(typesData);
        setLoading(false);
      } catch (e) {
        setErrorMessage('Whoopsie-doodle. Something is broken. Try it again maybe?');
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchByType(selectedType);
        if (selectedType) setPokedex(data);
        setLoading(false);
      } catch (e) {
        setErrorMessage(`Looks like we can't find that type of pokemon. Refresh the page to view all of them.`);
      }
    };
    fetchData();
  }, [selectedType]);

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
        <Pokeselect {...{ pokeTypes, setSelectedType }}/>
        <Pokesearch {...{ setSearchText, searchText, setPokedex, pokedex, setPokedexFromSearch }} />
      </div>
      <Pokelist pokedex={pokedex} />
    </div>
  );
}