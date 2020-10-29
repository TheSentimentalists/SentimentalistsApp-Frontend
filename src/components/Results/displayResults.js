import React from "react";
import "../../App.css";
import { Grid, Typography } from "@material-ui/core/";
import BProgressBar from "../Progressbar/BProgressBar";
import ArticleSummary from "./ArticleSummary";
import Credibility from "./Credibility";
import Objectivity from "./Objectivity";
import Polarity from "./Polarity";
import Logo from "../../assets/images/Sentimentalists_Logo_270X273.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    background: "#d9d9d9",
  },
  logo: {
    display: "block",
    width: "100%",
    height: "auto",
    maxHeight: "110px",
    maxWidth: "113px",
    margin: "auto",
    padding: "10px",
  },

  sentimentHeading : {
    fontFamily: "Graduate, sans-serif",
    marginTop: "5px",
    marginBottom: "7px"

  },

  sentimentText : {
    textAlign: "left",
    fontFamily: "Roboto, sans-serif"
  }
});

function DisplayResults(props) {
  const classes = useStyles();
  const resultsObj = props.displayResults;

  const analysedURL = resultsObj.url;
  console.log(resultsObj);

  const article = resultsObj.article;
  const credibilityObj = resultsObj.results[0].outcome;
  const polarityScore = resultsObj.results[1].outcome.score;
  const objectivityScore = resultsObj.results[2].outcome.score;
  const trustScore = 100 - resultsObj.results[3].outcome.score;

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
            className={classes.header}
          >
            <Grid item xs={6} sm={6} md={3} lg={2}>
              <img
                src={Logo}
                alt="The Sentimentalists Logo"
                className={classes.logo}
              />
            </Grid>
            <Grid item xs={6} sm={6} md={3} lg={3}>
              <Typography
                variant="h1"
                style={{ fontSize: "18px", fontFamily: "Graduate, sans-serif" }}
              >
                Analysing Media Sentiment Since 2020
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} style={{ borderBottom: "1px solid #efefef" }}>
          <ArticleSummary displayURL={analysedURL} displayArticle={article} />
        </Grid>
        <Grid
          item
          xs={12}
          style={{
            borderBottom: "1px solid #efefef",
            paddingTop: "12px",
            paddingBottom: "20px",
          }}
        >
          <BProgressBar Bscore={trustScore} />
        </Grid>
        <Grid item xs={12} md={4} style={{ borderRight: "1px solid #efefef"}}>
          <Grid container direction="row" justify="center">
          <Grid item xs={12}>
            <Typography variant="subtitle1" className={classes.sentimentHeading}>Source Credibility</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" className={classes.sentimentText}>
            <strong>What?</strong> The credibility of a website is very important and we will tell you why.
              <br/><strong>Why?</strong> Article context is very important, if you give us a chance we will tell you why.
              More text....MoreMore text.... text....More text....More text....More text....More text....More text....More text....
              More text....More text....More text....More text....More text....More text....
            </Typography>
          </Grid>
          <Grid item xs={12}>
          <Credibility outcome={credibilityObj} />
          </Grid>
          </Grid>
        </Grid>

        <Grid container direction="row" justify="center" md={8}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" className={classes.sentimentHeading}>Sentiment Anaylysis</Typography>
            </Grid>
            <Grid item xs={10}>
            <Typography variant="body2" className={classes.sentimentText}>
              <strong>What?</strong> Sentiment Analysis the process of analysing online pieces of
              writing to determine the tone they carry. 
              <br/><strong>Why?</strong> When consuming
              content it’s important to know the author’s attitude to something.
              They might have negative views about something you feel positively
              about, and vice versa. Knowing that this can influence what you
              are reading provides you with powerful insight when assessingx`
              whether or an article is fully factual.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Objectivity displayObjectivity={objectivityScore} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Polarity displayPolarity={polarityScore} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default DisplayResults;
