import React from "react";
import "../../App.css";
import BProgressBar from '../Progressbar/BProgressBar';
import ArticleSummary from "./ArticleSummary";
import Credibility from "./Credibility";


function DisplayResults(props) {
  const resultsObj = props.displayResults;

  const analysedURL = resultsObj.url;
  console.log(resultsObj);

  const article = resultsObj.article;

  const credibilityScore = resultsObj.results[0].outcome.score / 100;
  const source = resultsObj.results[0].outcome.source;
  const category = resultsObj.results[0].outcome.category;

  return (
    <div>

    <ArticleSummary displayURL={analysedURL} displayArticle={article}/>
      <BProgressBar/>
      <Credibility
        score={credibilityScore}
        category={category}
        source={source}
      />





    </div>
  );
}

export default DisplayResults;
