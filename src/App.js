// src/App.js
import React from 'react';
import DenominationConverter from './DenominationConverter';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontFamily: 'Open Sans, sans-serif', fontWeight: 300, fontSize: '2em', color: '#333' }}>
        Denomination Converter
      </h1>
      <DenominationConverter />
    </div>
  );
};

export default App;
