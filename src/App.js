
import URLInput from './components/URLInput/URLInput';
import DisplayResults from './components/Results/displayResults';
import BProgressBar from './components/Progressbar/BProgressBar';
import React, { useState } from "react";
import "./App.css";
import { Container, Grid, Backdrop } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "./components/Loading/Loading";



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

  loading: {
    zIndex: 999,
    color: '#fff',
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
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Container fixed>
        <div className={classes.containerStyle}>
         
             <div className={classes.innerContainer}>
            {!request ? (
              <URLInput setRequest={setRequest} setLoading={setLoading} />
            ) : (
              <div>
                <DisplayResults
                  displayResults={(request)}
                />

                <p>{request.error}</p>
              </div>
            )}

            <Grid container className={classes.footer}>
              <Grid item xs={12}>
                <h5>The Sentimentalists &copy; 2020</h5>
              </Grid>
            </Grid>
          </div>
        </div>
        <Backdrop className={classes.loading} open={loading}>
          <Loading />
        </Backdrop>
      </Container>

    </div>
  );
}

export default App;
