import React from 'react';

export default function Pokelist({ pokedex }) {
  return (
    <div>
      {pokedex.map((monster) => (
        <div key={monster.id}>
          <p>{monster.pokemon}, {monster.type_1}</p>
        </div>
      ))}
    </div>
  );
}
