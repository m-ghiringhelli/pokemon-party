import React from 'react';
import './Alphabetical.css';

export default function Alphabetical({ setAlphabetized }) {
  
  return (
    <div>
      <p className='sort' onClick={setAlphabetized}>A to Z</p>
      <p className='sort'>Z to A</p>
    </div>
  );
}
