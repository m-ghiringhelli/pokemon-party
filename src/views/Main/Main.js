import React, { useEffect, useState } from 'react';
import { fetchPokemon, fetchPokemonTypes, fetchByType, fetchAlphabetical } from '../../services/pokemon';
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
  const [alphabetized, setAlphabetized] = useState(false);

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
        setAlphabetized(false);
        const data = await fetchByType(selectedType);
        if (selectedType) setPokedex(data);
        setLoading(false);
      } catch (e) {
        setErrorMessage(`Looks like we can't find that type of pokemon. Refresh the page to view all of them.`);
      }
    };
    fetchData();
  }, [selectedType]);

  // useEffect(() => {
  //   const alphabetize = () => {
  //     if (alphabetized) {
  //       pokedex.sort(function(a, b) {
  //         if (a.pokemon.toLowerCase() < b.pokemon.toLowerCase()) return -1;
  //         if (a.pokemon.toLowerCase() > b.pokemon.toLowerCase()) return 1;
  //         return 0;
  //       });
  //       setPokedex(pokedex);
  //       console.log(pokedex);
  //     }
  //   };
  //   alphabetize();
  // }, [alphabetized, pokedex]);

  const setPokedexFromSearch = () => {
    setPokedex(pokedex.filter(monster => {
      return monster.pokemon.includes(searchText);
    }));
  };

  const alphabetize = () => {
    // if (alphabetized) {
    pokedex.sort(function(a, b) {
      if (a.pokemon.toLowerCase() < b.pokemon.toLowerCase()) return -1;
      if (a.pokemon.toLowerCase() > b.pokemon.toLowerCase()) return 1;
      return 0;
    });
    console.log('1st', pokedex);
    setPokedex(pokedex);
    setAlphabetized(true);
    // console.log(pokedex);
    // }
  };

  if (loading) return <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>;

  return (
    <div>
      <p>{errorMessage}</p>
      <div className='controls'>
        <Pokeselect {...{ pokeTypes, setSelectedType }} />
        <Pokesearch {...{ setSearchText, searchText, setPokedex, pokedex, setPokedexFromSearch, setAlphabetized }} />
        <Alphabetical {...{ setAlphabetized, alphabetize }} />
      </div>
      <Pokelist pokedex={pokedex} />
    </div>
  );
}