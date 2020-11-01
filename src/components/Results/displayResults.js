import React from "react";
import "../../App.css";
import { Grid, Typography, Button, Box } from "@material-ui/core/";
import TrustScore from "./TrustScore";
import ArticleSummary from "./ArticleSummary";
import Credibility from "./Credibility";
import Objectivity from "./Objectivity";
import Polarity from "./Polarity";
import Logo from "../../assets/images/Sentimentalists_Logo_270X273.png";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    borderBottom: "1px solid #efefef",
    backgroundColor: "#faf2e6"
  },

  logo: {
    display: "block",
    width: "100%",
    height: "auto",
    maxHeight: "110px",
    maxWidth: "113px",
    paddingLeft: "30px",
    marginBottom: "20px",
    marginTop: "20px"
  },

  goBack:{
paddingTop: "40px",
paddingBottom: "18px",

  },

  goBackText : {
    marginBottom: "10px"
  },

  backButton: {
    background: "#f8ce94",
    fontFamily: "Graduate, sans-serif",
    paddingBottom: "10px",
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: "18px",
    borderRadius: "0"
  },

  backButtonHeader: {
    background: "#f8ce94",
    fontFamily: "Graduate, sans-serif",
    paddingBottom: "10px",
    paddingLeft: "12px",
    paddingRight: "12px",
    marginRight: "30px",
    fontSize: "18px",
    borderRadius: "0"
  },

  credibilityBox: {
    paddingLeft: "12px",
    paddingTop: "18px",
  },

  credibilityText: {
    textAlign: "left",
    fontFamily: "Roboto, sans-serif",
    paddingLeft: "45px",
    marginTop: "10px",
    marginBottom: "25px",
  },

  sentimentBox: {
    paddingLeft: "12px",
    paddingTop: "18px",
  },
  sentimentHeading: {
    fontFamily: "Graduate, sans-serif",
    textAlign: "left",
    paddingLeft: "30px",
  },

  sentimentText: {
    textAlign: "left",
    fontFamily: "Roboto, sans-serif",
    paddingLeft: "30px",
    marginBottom: "25px",
  },

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
            <Grid item xs={4} md={2} align="left">
              <img
                src={Logo}
                alt="The Sentimentalists Logo"
                className={classes.logo}
              />
            </Grid>
            <Grid item xs={8} md={8} align="left">
            <Typography
                variant="h1"
                style={{ fontSize: "24px", fontWeight: "700", fontFamily: "Graduate, sans-serif" }}
              >
                The Sentimentalists
              </Typography>
              <Typography
                variant="h1"
                style={{ fontSize: "20px", fontFamily: "Graduate, sans-serif" }}
              >
                Analysing Media Sentiment Since 2020
              </Typography>
            </Grid>
            <Grid item md={2} alight="right">
            <Box display={{ xs: 'none', lg: 'block' }}>
              <Button variant="contained" disableElevation className={classes.backButtonHeader} onClick={() => {
                props.setRequest("")
              }}>
                Start Over
              </Button>
            </Box>
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
          <TrustScore Bscore={trustScore} />
        </Grid>
        <Grid item xs={12} md={4} style={{ borderRight: "1px solid #efefef" }}>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="stretch"
            className={classes.credibilityBox}
          >
            <Grid item xs={12}>
              <Credibility outcome={credibilityObj} />
            </Grid>

            <Grid item xs={10}>
              <Typography variant="body2" className={classes.credibilityText}>
                <strong>What?</strong> This scores provides an indication of the credibility of the article
                within the context of the website it appears on. 
                <br />
                <strong>Why? </strong>
                 A credible source presents factually accurate and unbiased information. The Category indicator shows how each media
                outlet may be politically biased.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          container
          justify="flex-start"
          direction="row"
          alignItems="flex-start"
          md={8}
          className={classes.sentimentBox}
        >
          <Grid item xs={12} md={6}>
            <Objectivity displayObjectivity={objectivityScore} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Polarity displayPolarity={polarityScore} />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              className={classes.sentimentHeading}
            >
              Sentiment Analysis
            </Typography>
          </Grid>

          <Grid item xs={10}>
            <Typography variant="body2" className={classes.sentimentText}>
              <strong>What?</strong> Sentiment Analysis the process of analysing
              online pieces of writing to determine the tone they carry.
              <br />
              <strong>Why?</strong> When consuming content it’s important to
              know the author’s attitude to something. They might have negative
              views about something you feel positively about, and vice versa.
              Knowing that this can influence what you are reading provides you
              with powerful insight when assessing whether or an article is
              fully factual.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.goBack} style={{ borderTop: "1px solid #efefef" }}>
        <Typography variant="body2" className={classes.goBackText}>Want to analyse another article?</Typography>
              <Button variant="contained" disableElevation className={classes.backButton} onClick={() => {
                props.setRequest("")
              }}>
                Click Here
              </Button>
            </Grid>
    </div>
  );
}

export default DisplayResults;
