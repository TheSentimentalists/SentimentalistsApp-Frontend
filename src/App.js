import React, { useState } from "react";
import "./App.css";
import { Container, Grid } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import URLInput from "./components/URLInput/URLInput";
import DisplayResults from "./components/Results/displayResults";
import {ErrorBoundary} from 'react-error-boundary';

//styles
const useStyles = makeStyles({
  containerStyle: {
    paddingTop: "20px",
    paddingBottom: "25px",
  },

  innerContainer: {
    boxShadow: "8px 8px #d9d9d9",
    background: "#ffffff",
  },

  footer: {
    background: "#6bb26d",
    padding: "7px",
  },
});

function App() {
  const classes = useStyles();  

  //request
  const [request, setRequest] = useState("");

  const ErrorComponent = ( {resetErrorBoundary} ) => {
    return (
      <div role="alert">
        <p>Please enter a valid URL</p>
    
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )

  }

  return (
    <div className="App">
      <Container fixed>
        <div className={classes.containerStyle}>
          <div className={classes.innerContainer}>
            {!request ? (
              
              
              <URLInput setRequest={setRequest} />  
              
            ) : (
              <div>
              <ErrorBoundary FallbackComponent={ErrorComponent} onReset={() => {setRequest('')}} resetKeys={[request]} >
                <DisplayResults displayResults={JSON.stringify(request.results)}
                  displayURL={request.url}/>  
                
                </ErrorBoundary>
                
              </div>
            )}

            <Grid container className={classes.footer}>
              <Grid item xs={12}>
                <h5>The Sentimentalists &copy; 2020</h5>
              </Grid>
            </Grid>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
