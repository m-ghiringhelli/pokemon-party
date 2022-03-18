import React from 'react';

export default function Pokesearch({ setSearchText, setPokedexFromSearch, setAlphabetized }) {
  
  return (
    <div>
      <input type='text' onChange={(e) => {setSearchText(e.target.value);}}></input>
      <button onClick={setPokedexFromSearch}>search</button>
    </div>
  );
}
