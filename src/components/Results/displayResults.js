import React from "react";
import "../../App.css";
import BProgressBar from "../Progressbar/BProgressBar";
import ArticleSummary from "./ArticleSummary";
import Grid from "@material-ui/core/Grid";
import Credibility from "./Credibility";
import Objectivity from "./Objectivity";

function DisplayResults(props) {
  const resultsObj = props.displayResults;

  const analysedURL = resultsObj.url;
  console.log(resultsObj);

const article = resultsObj.article;

const objectivityScore = resultsObj[0].outcome.score;

const BiasScore = resultsObj[0].outcome;

  return (
    <div>

<Grid container>

      <ArticleSummary displayURL={analysedURL} displayArticle={article}/>
      <BProgressBar Bscore = {BiasScore}/>  
      <Grid item xs={12} md={4}>
        <Credibility outcome={resultsObj[0].outcome} />
      </Grid>
    
      <Grid item xs={12} md={4}>
        <Objectivity displayObjectivity={objectivityScore}/>
      </Grid>



</Grid>
    </div>
  );
}

export default DisplayResults;
