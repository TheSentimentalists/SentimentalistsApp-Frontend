import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GaugeChart from "react-gauge-chart";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Textfit from "react-textfit";
import "../../App.css";
import ArticleSummary from './ArticleSummary';
import Credibility from './Credibility';



function DisplayResults(props) {
  
  const resultsObj = JSON.parse(props.displayResults);
  const credibilityScore = resultsObj[0].score / 100;
  // accesses score from credibility analysis, assigns it to a variable,
  //the score is divided by 100 to provide the format required forthe percent prop on the gauge.
  const source = resultsObj[0].source;
  const category = resultsObj[0].category;
  const analysedURL = props.displayURL;

  return (
    <div>
      
      <Grid container justify="center">
      <ArticleSummary />
      <Credibility score={credibilityScore} />
        
      </Grid>
    </div>
  );
}

export default DisplayResults;
