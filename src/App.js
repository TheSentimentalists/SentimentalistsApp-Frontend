import React from 'react';
import './App.css';
import { Container, Grid } from '@material-ui/core/';
import Header from './components/Main/Header';
import { makeStyles } from '@material-ui/core/styles';
import URLInput from './components/URLInput';


const useStyles = makeStyles({
  containerStyle : {
    boxShadow: '8px 8px #d9d9d9',
    background: '#ffffff',
  },

  footer: {
        background: '#6bb26d',
        padding: '7px',
  }
})

function App() {
const classes = useStyles();

  return (
    <div className="App">
      <Container fixed>
      <div className={classes.containerStyle}>
      <Header />

      <Grid container className={classes.footer}>
       <Grid item xs={12}>
         <h5>The Sentimentalists &copy; 2020</h5>
       </Grid>
        </Grid>
      </div>
      </Container> 
    </div>
  );
}

export default App;
