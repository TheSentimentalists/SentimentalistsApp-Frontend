import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Header from './components/Main/Header';
import URLInput from './components/URLInput';

function App() {
  return (
    <div className="App">
      <Container fixed style={{border: '2px solid red'}}>
      <Header />
      </Container> 
    </div>
  );
}

export default App;
