import React, { useState } from "react";
import "./App.css";
import { Container, Grid, Backdrop } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import URLInput from "./components/URLInput/URLInput";
import Logo from "./assets/images/Sentimentalists_Logo_270X273.png";
import Loading from "./components/Loading/Loading";
import DisplayResults from "./components/Results/displayResults";
import { ErrorBoundary } from "react-error-boundary";

//styles
const useStyles = makeStyles({
  containerStyle: {
    paddingTop: "20px",
    paddingBottom: "25px"
  },

  innerContainer: {
    boxShadow: "8px 8px #d9d9d9",
    background: "#ffffff",
  },

  errorDisplay: {
    paddingTop: "15px",
    paddingBottom: "50px"
  },

  errorText: {
    fontSize: "25px"
  },

  tryAgainButton: {
    background: "#f8ce94",
    fontFamily: "Graduate, sans-serif",
    fontSize: "20px",
    border: "none",
    padding: "15px",
    cursor: "pointer"
  },

  loading: {
    zIndex: 999,
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'

  },

  footer: {
    background: "#6bb26d",
    padding: "7px"
  }
  });

function App() {
  const classes = useStyles();

  //request
  const [request, setRequest] = useState("");
  const [loading, setLoading] = useState(false);

  const ErrorComponent = ({ resetErrorBoundary }) => {
    return (
      <div role="alert" className={classes.errorDisplay}>
        <img src={Logo} alt="The Sentimentalists Logo" />

        <p className={classes.errorText}>Please enter a valid URL</p>

        <button className={classes.tryAgainButton} onClick={resetErrorBoundary}>
          Try again
        </button>
      </div>
    );
  };

  return (
    <div className="App">
      <Container fixed>
        <div className={classes.containerStyle}>
         
             <div className={classes.innerContainer}>
            {!request ? (
              <URLInput setRequest={setRequest} setLoading={setLoading} />
            ) : (
              <div>
                <ErrorBoundary
                  FallbackComponent={ErrorComponent}
                  onReset={() => {
                    setRequest("");
                  }}
                  resetKeys={[request]}
                >
                  <DisplayResults
                    displayResults={request}
                  />
                </ErrorBoundary>
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
