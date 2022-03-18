import React from 'react';
import './Pokecard.css';

export default function Pokecard({ pokedex }) {
  const tenPokemon = pokedex.slice(0, 10);
  return (
    <div className="pokelist">
      {tenPokemon.map((monster) => (
        <div className="pokecard" key={monster.id} style={{ backgroundColor: monster.color_1 }}>
          <p className="name">{monster.pokemon.toUpperCase()}</p>
          <img src={monster.url_image} />
          <div className="info">
            <p>height: {monster.height / 10}m</p>
            <p>weight: {monster.weight / 10}kg</p>
            <p>{monster.type_1 + ' '}
              {((monster.type_2) === 'NA') ? '' : monster.type_2}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
