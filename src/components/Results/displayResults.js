import React from "react";
import "../../App.css";
import ArticleSummary from "./ArticleSummary";
import Grid from "@material-ui/core/Grid";
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
<Grid container>

      <ArticleSummary displayURL={analysedURL} displayArticle={article}/>
      <Grid item xs={12} md={4}>
      <Credibility
        score={credibilityScore}
        category={category}
        source={source}
      />
</Grid>
<Grid item xs={12} md={4}>
      <Objectivity displayObjectivity={objectivityScore}/>
      </Grid>
      </Grid>
    </div>
  );
}

export default DisplayResults;
