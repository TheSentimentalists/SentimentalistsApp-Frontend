import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GaugeChart from "react-gauge-chart";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Textfit from "react-textfit";
import "../../App.css";
import ArticleSummary from "./ArticleSummary";
import Credibility from "./Credibility";

function DisplayResults(props) {
  //const resultsObj = JSON.parse(props.displayResults);
  const resultsObj = {
    url: "https://www.theguardian.com/world/2020/[...]",
    article: {
      header:
        "PM admits failings as England's Covid contact-tracing system hits new low",
      summary:
        "Boris Johnson and his chief scientific adviser have admitted to failings in England\\u2019s \\u00a312bn test-and-trace system as contact-tracing fell to a new low and waiting times for test results soared to almost double the target.\\nThe median time taken to receive a test result at regional sites rose to 45 hours, from 28 the previous week.\\nLocal test site result times increased to 47 hours from 29, and mobile test units rose to 41 hours from 26.\\nThe positivity rate was 6.3% in the previous week and 0.9% in the week ending 26 August.\\nWe always need to balance ensuring as many people as possible can get a test alongside ensuring test results are delivered as quickly as possible, and as capacity continues to grow at pace, we expect to see improvements.\\u201d",
      keywords: [
        "low",
        "admits",
        "covid",
        "results",
        "contacts",
        "test",
        "week",
        "failings",
        "hours",
        "previous",
        "contacttracing",
        "reached",
        "hits",
        "system",
        "englands",
        "times",
        "testing",
      ],
    },
    results: [
      {
        type: "credibility",
        outcome: {
          score: 100.0,
          source: "Media Bias/Fact Check",
          category: "Left Center",
        },
      },
      { type: "polarity", outcome: { score: 0.11155073461891642 } },
      { type: "subjectivity", outcome: { score: 0.5150528007346189 } },
    ],
  };

  const credibilityScore = resultsObj.results[0].outcome.score / 100;
  // accesses score from credibility analysis, assigns it to a variable,
  //the score is divided by 100 to provide the format required forthe percent prop on the gauge.
  const category = resultsObj.results[0].outcome.category;
  /*const source = resultsObj[0].source;
  const category = resultsObj[0].category;
  const analysedURL = props.displayURL;*/
  console.log(JSON.parse(props.displayResults))

  return (
    <div>
      <Grid container justify="center">
        <Grid item >
        <ArticleSummary />
        </Grid>
        <Credibility score={credibilityScore} category={category}/>
      </Grid>
    </div>
  );
}

export default DisplayResults;
