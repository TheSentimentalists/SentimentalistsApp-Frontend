import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GaugeChart from "react-gauge-chart";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Textfit from "react-textfit";
import "../../App.css";
import BProgressBar from './components/ProgressBar/BProgressBar';

const useStyles = makeStyles({
  mainGaugeHeading: {
    fontFamily: "Graduate, sans-serif",
    paddingTop: "20px",
    paddingBottom: "40px",
    textAlign: "center",
  },

  mainGauge: {},
  resultsTable: {
    padding: "7px",
  },

  resultsHeading: {
    fontFamily: "Graduate, sans-serif",
  },

  resultsText: {
    fontFamily: "Roboto, sans-serif",
    textAlign: "center",
  },
});

function DisplayResults(props) {
  const classes = useStyles();
  const resultsObj = JSON.parse(props.displayResults);
  const credibilityScore = resultsObj[0].score / 100;
  // accesses score from credibility analysis, assigns it to a variable,
  //the score is divided by 100 to provide the format required forthe percent prop on the gauge.
  const source = resultsObj[0].source;
  const category = resultsObj[0].category;
  const analysedURL = props.displayURL;

  return (
    <div>
      <BProgressBar/>
      <Grid container justify="center">
        <Grid item xs={12} sm={10}>
          <Typography variant="h5" className={classes.mainGaugeHeading}>
            Credibility Score
          </Typography>
        </Grid>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <GaugeChart
            className={classes.mainGauge}
            id="main-gauge"
            percent={credibilityScore}
            hideText={false}
            textColor="#000000"
            nrOfLevels={3}
            colors={["#ee445e", "#f8ce94", "#6bb26d"]}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={8} lg={8}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.resultsTable}
          >
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                className={classes.resultsHeading}
              >
                Your URL:
              </Typography>
            </Grid>
            <Grid item xs={10} sm={6}>
              <Textfit className={classes.resultsText} mode="multi">
                {analysedURL}
              </Textfit>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                className={classes.resultsHeading}
              >
                Source:
              </Typography>
            </Grid>
            <Grid item xs={10} sm={6}>
              <Typography variant="body2" className={classes.resultsText}>
                {source}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                className={classes.resultsHeading}
              >
                Category:
              </Typography>
            </Grid>
            <Grid item xs={10} sm={6}>
              <Typography variant="body2" className={classes.resultsText}>
                {category}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default DisplayResults;
