import React from 'react';
import './App.css';
import Header from './components/Main/Header'
import URLInput from './components/URLInput/URLInput'

function App() {


const inputData = [];
//just putting data in an array for now. Will be stored as JSON to sent to API

const getURL = (text) =>{
  inputData.push(text);
  console.log(inputData);
}


  return (
    <div className="App">
      <Header />
      <URLInput getURL={ getURL } />
    </div>
  );
}

export default App;
