import React from 'react';

export default function Pokesearch({ setSearchText, setPokedexFromSearch }) {
  
  return (
    <div>
      {/* populate the search text state */}
      <input type='text' onChange={(e) => {setSearchText(e.target.value);}}></input>
      {/* create a pokedex that contains the search term when clicked */}
      <button onClick={setPokedexFromSearch}>search</button>
    </div>
  );
}
