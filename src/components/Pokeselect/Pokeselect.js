import React from 'react';

export default function Pokeselect({ pokeTypes }) {
  return (
    <div>
      <select>
        <option selected disabled>- sort by type -</option>
        {pokeTypes.map((type) => <option key={type}>{type}</option>)}
      </select>
    </div>
  );
}
