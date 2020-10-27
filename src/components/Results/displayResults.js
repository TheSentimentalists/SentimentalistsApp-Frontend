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


  // temporary code to support credibility score while it's here
  const credibilityScore = resultsObj.results[0].outcome.score / 100;
  const source = resultsObj.results[0].outcome.source;
  const category = resultsObj.results[0].outcome.category;
  const BiasScore = resultsObj.results[3].outcome;

  return (
    <div>
    <ArticleSummary displayURL={analysedURL} displayArticle={article}/>
      <BProgressBar Bscore={BiasScore}/>
      <Credibility
        score={credibilityScore}
        category={category}
        source={source}
      />


    </div>
  );
}

export default DisplayResults;
