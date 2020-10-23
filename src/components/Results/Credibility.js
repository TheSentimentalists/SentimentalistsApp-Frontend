import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import GaugeChart from "react-gauge-chart";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "../../App.css";

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

function Credibility(props){
    const classes = useStyles();


    return(
        <div>
        <Grid container>
        <Grid item xs={12} sm={10}>
          <Typography variant="h5" className={classes.mainGaugeHeading}>
            Credibility Score
          </Typography>
        </Grid>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <GaugeChart
            className={classes.mainGauge}
            id="main-gauge"
            percent={props.credibilityScore}
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
              
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
    )
}



export default Credibility;