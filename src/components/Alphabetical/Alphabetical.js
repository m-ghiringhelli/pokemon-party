import React from 'react';
import './Alphabetical.css';

export default function Alphabetical({ setAlphabetized, alphabetize }) {
//   const alphabetizeAtoZ = () => {
//     setAlphabetized(true);
//   };

  return (
    <div>
      <p className='sort' onClick={alphabetize}>A to Z</p>
      <p className='sort'>Z to A</p>
    </div>
  );
}
