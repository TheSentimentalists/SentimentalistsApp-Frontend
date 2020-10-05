import React from 'react';
import './App.css';
import Header from './components/Header'
import URLInput from './components/URLInput'

function App() {

const getURL = () =>{
  console.log("I am getting a URL");
}


  return (
    <div className="App">
      <Header />
      <URLInput />
    </div>
  );
}

export default App;
