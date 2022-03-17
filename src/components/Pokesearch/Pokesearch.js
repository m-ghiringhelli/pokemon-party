import React from 'react';

export default function Pokesearch({ setSearchText }) {
  return (
    <div>
      <form>
        <input type='text' onChange={(e) => {setSearchText(e.target.value);}}></input>
        <button type='submit'>search</button>
      </form>
    </div>
  );
}
