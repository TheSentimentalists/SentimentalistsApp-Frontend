import React from 'react';
import './App.css';
import { Container, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import URLInput from './components/URLInput/URLInput';

//styles
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

//getUrl
 const inputData = {
   url: "",
 };

 const getURL = (text) => {
   inputData.url = text;
   console.log(inputData);
 }

function App() {
const classes = useStyles();

  return (
    <div className="App">
      <Container fixed>
      <div className={classes.containerStyle}>
      
      <URLInput getURL= { getURL }/>

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
