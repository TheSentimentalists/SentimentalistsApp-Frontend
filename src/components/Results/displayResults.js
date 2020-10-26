import React from "react";
import "../../App.css";
import ArticleSummary from "./ArticleSummary";
import Credibility from "./Credibility";
import Objectivity from "./Objectivity";

function DisplayResults(props) {
  const resultsObj = props.displayResults;

  const analysedURL = resultsObj.url;
  console.log(resultsObj);

  
const article = resultsObj.article;

const objectivityScore = resultsObj.results[2].outcome.score;


  // temporary code to support credibility score while it's here
  const credibilityScore = resultsObj.results[0].outcome.score / 100;
  const source = resultsObj.results[0].outcome.source;
  const category = resultsObj.results[0].outcome.category;

  return (
    <div>


      <ArticleSummary displayURL={analysedURL} displayArticle={article}/>
      
      <Credibility
        score={credibilityScore}
        category={category}
        source={source}
      />

      <Objectivity displayObjectivity={objectivityScore}/>
    </div>
  );
}

export default DisplayResults;
