import React from "react";
import "../../App.css";
import { Grid } from "@material-ui/core/";
import BProgressBar from '../Progressbar/BProgressBar';
import ArticleSummary from "./ArticleSummary";
import Credibility from "./Credibility";
import Objectivity from "./Objectivity";


function DisplayResults(props) {
  const resultsObj = props.displayResults;
  console.log(resultsObj);

  const analysedURL = resultsObj.url;
  const article = resultsObj.article;

  // temporary code to support credibility score while it's here
  const credibilityScore = resultsObj.results[0].outcome.score;
  const source = resultsObj.results[0].outcome.source;
  const category = resultsObj.results[0].outcome.category;
  const objectivityScore = resultsObj.results[2].outcome.score;
  const BiasScore = resultsObj.results[3].outcome.score;

  return (
    <div>
    <ArticleSummary displayURL={analysedURL} displayArticle={article}/>
      <BProgressBar Bscore={BiasScore}/>
      <Grid item xs={12} md={4}>
        <Credibility score={credibilityScore} source={source} category={category} />
      </Grid>
    
      <Grid item xs={12} md={4}>
        <Objectivity displayObjectivity={objectivityScore}/>
      </Grid>

    </div>
  );
}

export default DisplayResults;

