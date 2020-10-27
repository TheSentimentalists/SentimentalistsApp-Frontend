import React from "react";
import "../../App.css";
import ArticleSummary from "./ArticleSummary";
import Credibility from "./Credibility";

function DisplayResults(props) {
  const resultsObj = props.displayResults;

  const analysedURL = resultsObj.url;
  console.log(resultsObj);

  const article = resultsObj.article;

  return (
    <div>
      <ArticleSummary displayURL={analysedURL} displayArticle={article} />

      <Credibility outcome={resultsObj.results[0].outcome}
        
      />
    </div>
  );
}

export default DisplayResults;
