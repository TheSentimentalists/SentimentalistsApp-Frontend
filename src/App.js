import React from 'react';
import './App.css';
import Header from './components/Header'
import URLInput from './components/URLInput'

function App() {

  //How to store the data? Redux? Rest? Jamie help?
const inputData = [];
//just putting data in an array for now. 

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
