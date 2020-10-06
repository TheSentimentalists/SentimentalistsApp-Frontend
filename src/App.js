import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Header from './components/Main/Header';
import { makeStyles } from '@material-ui/core/styles';
import URLInput from './components/URLInput';
import { TextareaAutosize } from '@material-ui/core';

const useStyles = makeStyles({
  containerStyle : {
    boxShadow: '8px 8px #d9d9d9',
    padding: '10px',
    background: '#ffffff',
  }
})

function App() {
const classes = useStyles();

  return (
    <div className="App">
      <Container fixed>
      <div className={classes.containerStyle}>
      <Header />
      </div>  
      </Container> 
    </div>
  );
}

export default App;
