import React from 'react';
import './Pokeselect.css';

export default function Pokeselect({ pokeTypes, setSelectedType }) {
  return (
    <div>
      <select className='pokepicker' onChange={(e) => {
        setSelectedType(e.target.value);
      }}>
        <option selected disabled>- sort by type -</option>
        {pokeTypes.map((type) => <option key={type} value={type}>{type}</option>)}
      </select>
    </div>
  );
}
