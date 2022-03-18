import React from 'react';
import './Alphabetical.css';

export default function Alphabetical({ setAlphabetized }) {
  const alphabetizeAtoZ = () => {
    setAlphabetized('asc');
  };

  const alphabetizeZtoA = () => {
    setAlphabetized('desc');
  };

  return (
    <div>
      <p className='sort' onClick={alphabetizeAtoZ}>A to Z</p>
      <p className='sort' onClick={alphabetizeZtoA}>Z to A</p>
    </div>
  );
}
