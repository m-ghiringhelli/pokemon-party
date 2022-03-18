import React from 'react';
import './Alphabetical.css';

export default function Alphabetical({ setAlphabetized }) {
  const alphabetizeAtoZ = () => {
    setAlphabetized(true);
  };

  return (
    <div>
      <p className='sort' onClick={alphabetizeAtoZ}>A to Z</p>
      <p className='sort'>Z to A</p>
    </div>
  );
}
