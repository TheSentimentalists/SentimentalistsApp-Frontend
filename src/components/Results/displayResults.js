import React from "react";
import "../../App.css";
import ArticleSummary from "./ArticleSummary";
import Credibility from "./Credibility";

function DisplayResults(props) {
  const resultsObj = props.displayResults;

  console.log(resultsObj);

  // temporary code to support credibility score while it's here
  const credibilityScore = resultsObj.results[0].outcome.score / 100;
  const source = resultsObj.results[0].outcome.source;
  const category = resultsObj.results[0].outcome.category;

  return (
    <div>
      <ArticleSummary />

      <Credibility
        score={credibilityScore}
        category={category}
        source={source}
      />
    </div>
  );
}

export default DisplayResults;
