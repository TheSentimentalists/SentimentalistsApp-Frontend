import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import URLInput from './components/URLInput'

function App() {

const getURL = (text) =>{
  console.log(text);
}


  return (
    <div className="App">
      <Header />
      <URLInput getURL={ getURL } />
    </div>
  );
}

export default App;
