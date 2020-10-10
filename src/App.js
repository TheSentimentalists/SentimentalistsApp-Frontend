import React, { useState } from 'react';
import './App.css';
import { Container, Grid } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import URLInput from './components/URLInput/URLInput';
import DisplayResults from './components/Results/displayResults';

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
 }

function App() {
const classes = useStyles();

 //request
 const [request, setRequest] = useState("");

  return (
    <div className="App">
      <Container fixed>
      <div className={classes.containerStyle}>
    
    {!request
    ?
      <URLInput getURL={ getURL } setRequest={ setRequest }/>
    :
    
      <div>
      <DisplayResults displayResults={JSON.stringify(request.results)} />
      <h3>{request.requestid}</h3>
      <h3>{request.url}</h3>
      <h3>{request.status}</h3>
      <h3>{JSON.stringify(request.results)}</h3>
      <h3>{request.error}</h3>
      </div>
    }

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