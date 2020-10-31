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
    background: "#ffffff"
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
  const [request, setRequest] = useState({
    "url": "https://www.theguardian.com/education/2020/oct/26/matt-hancock-defends-refusal-to-climb-down-on-free-school-meals",
    "results": [
      {
        "type": "credibility",
        "outcome": {
          "score": 100.0,
          "source": "Media Bias/Fact Check",
          "category": "Left Center"
        }
      },
      {
        "type": "polarity",
        "outcome": {
          "score": 0.20466490299823636
        }
      },
      {
        "type": "objectivity",
        "outcome": {
          "score": 0.5157730746619635
        }
      },
      {
        "type": "bias",
        "outcome": {
          "score": 22.96306094454243
        }
      }
    ],
    "article": {
      "header": "Free school meals: Johnson under renewed pressure from council leaders",
      "summary": "Boris Johnson is facing renewed pressure to commit more money for free school meals after councils said a £63m fund which ministers have suggested could be used for this has already been spent on other Covid necessities.\nNo 10 under growing pressure to U-turn over free school meals Read moreRichard Watts, the Labour leader of Islington council, said the north London local authority’s share of the £63m was not enough to even cover free school meals over half-term and Christmas, as these cost £130,000 a week.\n“I think the government is trying to explain away their total failure to properly fund free school meals by pointing to some money, when they should have just recognised it was a problem and paid for it,” Watts said.\nWe will be trying to find it from other sources.”Both Johnson and Hancock praised the campaigning of Rashford, whose petition calling for an extension for free school meal coverage has reached almost 900,000 signatures.\n“I agree very strongly with the purpose of the campaign run by Marcus Rashford,” Hancock told Sky News.",
      "keywords": [
        "school",
        "councils",
        "support",
        "63m",
        "hancock",
        "council",
        "rashford",
        "pressure",
        "money",
        "johnson",
        "meals",
        "leaders",
        "renewed",
        "free"
      ],
      "topics": [
        {
          "type": "PERSON",
          "topic": "Watts"
        },
        {
          "type": "PERSON",
          "topic": "Izzi Seccombe"
        },
        {
          "type": "PERSON",
          "topic": "Boris Johnson"
        },
        {
          "type": "PERSON",
          "topic": "Matt Hancock"
        },
        {
          "type": "PERSON",
          "topic": "Hancock"
        },
        {
          "type": "PERSON",
          "topic": "Johnson"
        },
        {
          "type": "PERSON",
          "topic": "Marcus Rashford"
        },
        {
          "type": "GPE",
          "topic": "London"
        },
        {
          "type": "GPE",
          "topic": "England"
        },
        {
          "type": "GPE",
          "topic": "Greenwich"
        },
        {
          "type": "GPE",
          "topic": "Rashford"
        },
        {
          "type": "GPE",
          "topic": "Hancock"
        },
        {
          "type": "GPE",
          "topic": "Johnson"
        },
        {
          "type": "GPE",
          "topic": "Reading"
        },
        {
          "type": "ORG",
          "topic": "Islington council"
        },
        {
          "type": "ORG",
          "topic": "BBC Radio 4’s"
        },
        {
          "type": "ORG",
          "topic": "Manchester food bank"
        },
        {
          "type": "ORG",
          "topic": "Local Government Association"
        },
        {
          "type": "ORG",
          "topic": "Covid"
        },
        {
          "type": "ORG",
          "topic": "Warwickshire county council"
        },
        {
          "type": "ORG",
          "topic": "Labour"
        },
        {
          "type": "ORG",
          "topic": "videoHe"
        },
        {
          "type": "ORG",
          "topic": "Sky News"
        },
        {
          "type": "ORG",
          "topic": "Manchester United"
        },
        {
          "type": "DATE",
          "topic": "this winter"
        },
        {
          "type": "DATE",
          "topic": "the holidays"
        },
        {
          "type": "DATE",
          "topic": "10 July"
        },
        {
          "type": "DATE",
          "topic": "this Christmas"
        },
        {
          "type": "DATE",
          "topic": "12 weeks"
        },
        {
          "type": "DATE",
          "topic": "Today"
        },
        {
          "type": "DATE",
          "topic": "the summer"
        },
        {
          "type": "DATE",
          "topic": "June"
        },
        {
          "type": "DATE",
          "topic": "Christmas"
        },
        {
          "type": "LOC",
          "topic": "Watts"
        },
        {
          "type": "NORP",
          "topic": "English"
        },
        {
          "type": "NORP",
          "topic": "Covid"
        },
        {
          "type": "NORP",
          "topic": "Conservative"
        },
        {
          "type": "WORK_OF_ART",
          "topic": "Sky News"
        },
        {
          "type": "MONEY",
          "topic": "130,000"
        },
        {
          "type": "MONEY",
          "topic": "£63m"
        },
        {
          "type": "MONEY",
          "topic": "63"
        },
        {
          "type": "ORDINAL",
          "topic": "1bn"
        },
        {
          "type": "CARDINAL",
          "topic": "almost 900,000"
        },
        {
          "type": "CARDINAL",
          "topic": "half"
        },
        {
          "type": "CARDINAL",
          "topic": "10"
        }
      ]
    }
  });
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
