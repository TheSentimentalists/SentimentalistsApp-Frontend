import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import GaugeChart from "react-gauge-chart";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../../App.css';


const useStyles = makeStyles({
  mainGaugeHeading: {
    fontFamily: "Graduate, sans-serif",
    paddingTop: "20px",
    paddingBottom: "40px",
    textAlign: "center",  
    },

    mainGauge : {
      border: "1px solid red",  
    }
})


function DisplayResults(props) {
  const classes = useStyles();
  const resultsObj = JSON.parse(props.displayResults);
  const credibilityScore = (resultsObj[0].score / 100);
  // accesses score from credibility analysis, assigns it to a variable, 
  //the score is divided by 100 to provide the format required forthe percent prop on the gauge.
  


  return (
    <div>
      <Grid container justify="center">
      <Grid item xs={12} sm={10}>
      <Typography variant="h5" className={classes.mainGaugeHeading}>Credibility Score</Typography>
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
  <Typography variant="body2"></Typography>
       </Grid> 
</div>
  );
}

export default DisplayResults;
