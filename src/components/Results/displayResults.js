import React from "react";
import "../../App.css";
import BProgressBar from "../Progressbar/BProgressBar";
import ArticleSummary from "./ArticleSummary";
import Credibility from "./Credibility";

function DisplayResults(props) {
  const resultsObj = props.displayResults;

  const analysedURL = resultsObj.url;
  console.log(resultsObj);
  const article = resultsObj.article;

  return (
    <div>
      <Credibility outcome={resultsObj.results[0].outcome} />

      <ArticleSummary displayURL={analysedURL} displayArticle={article} />
      <BProgressBar />
    </div>
  );
}

export default DisplayResults;
