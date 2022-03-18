import React from 'react';
import Pokecard from '../Pokecard/Pokecard';
import './Pokelist.css';

export default function Pokelist({ pokedex }) {
  return (
    <div className='pokelist'>
      <Pokecard pokedex={pokedex} />
    </div>
  );
}
