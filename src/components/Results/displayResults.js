import React from "react";
import "../../App.css";
import ArticleSummary from "./ArticleSummary";
import Credibility from "./Credibility";

function DisplayResults(props) {

  const classes = useStyles();
  const resultsObj = props.displayResults;
  const analysedURL = resultsObj.url;
  console.log(resultsObj)

  // temporary code to support credibility score while it's here
  const credibilityScore = resultsObj.results[0].outcome.score / 100
  const source = resultsObj.results[0].outcome.source
  const category = resultsObj.results[0].outcome.category


  return (
    <div>
      <ArticleSummary />

      <Credibility score={credibilityScore} category={category} source={source} />
    </div>
  );
}

export default DisplayResults;
