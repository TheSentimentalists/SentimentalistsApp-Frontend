import React from "react";
import "../../App.css";
import ArticleSummary from "./ArticleSummary";
import Credibility from "./Credibility";

function DisplayResults(props) {

  const classes = useStyles();
  const resultsObj = props.displayResults;
  const analysedURL = resultsObj.url;
  console.log(resultsObj);

  
const article = resultsObj.article;
console.log(article);

  // temporary code to support credibility score while it's here
  const credibilityScore = resultsObj.results[0].outcome.score / 100
  const source = resultsObj.results[0].outcome.source
  const category = resultsObj.results[0].outcome.category


  return (
    <div>

      <ArticleSummary displayURL={analysedURL} displayArticle={article}/>
      <Grid container justify="center">
  
        <Grid item xs={12} sm={10}>
          <Typography variant="h5" className={classes.mainGaugeHeading}>
            Credibility Score
          </Typography>
        </Grid>
        <Grid item xs={12} sm={10} md={8} lg={6}>
          <GaugeChart
            className={classes.mainGauge}
            id="main-gauge"
            percent={credibilityScore}
            hideText={false}
            textColor="#000000"
            nrOfLevels={3}
            colors={["#ee445e", "#f8ce94", "#6bb26d"]}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={8} lg={8}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.resultsTable}
          >
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                className={classes.resultsHeading}
              >
                Your URL:
              </Typography>
            </Grid>
            <Grid item xs={10} sm={6}>
              <Textfit className={classes.resultsText} mode="multi">
                {analysedURL}
              </Textfit>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                className={classes.resultsHeading}
              >
                Source:
              </Typography>
            </Grid>
            <Grid item xs={10} sm={6}>
              <Typography variant="body2" className={classes.resultsText}>
                {source}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="subtitle1"
                className={classes.resultsHeading}
              >
                Category:
              </Typography>
            </Grid>
            <Grid item xs={10} sm={6}>
              <Typography variant="body2" className={classes.resultsText}>
                {category}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      
    </div>
  );
}

export default DisplayResults;
