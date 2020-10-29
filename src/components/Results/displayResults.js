import React from "react";
import "../../App.css";
import BProgressBar from "../Progressbar/BProgressBar";
import ArticleSummary from "./ArticleSummary";
import Grid from "@material-ui/core/Grid";
import Credibility from "./Credibility";
import Objectivity from "./Objectivity";
import Polarity from "./Polarity";

function DisplayResults(props) {
  const resultsObj = props.displayResults;

  const analysedURL = resultsObj.url;
  console.log(resultsObj);

const article = resultsObj.article;

const objectivityScore = resultsObj.results[2].outcome.score;
const polarityScore = resultsObj.results[1].outcome.score;

  return (
    <div>

<Grid container>

      <Grid item xs={12}>
        <ArticleSummary displayURL={analysedURL} displayArticle={article}/>
      </Grid>

      <Grid item xs={12}>
        <BProgressBar/>  
      </Grid>

      <Grid item xs={12} md={4}>
        <Credibility outcome={resultsObj.results[0].outcome} />
      </Grid>
    
      <Grid item xs={12} md={4}>
        <Objectivity displayObjectivity={objectivityScore}/>
      </Grid>

      <Grid item xs={12} md={4}>
        <Polarity displayPolarity={polarityScore}/>
      </Grid>

</Grid>
    </div>
  );
}

export default DisplayResults;

