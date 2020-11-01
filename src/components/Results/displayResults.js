import React from "react";
import "../../App.css";
import { Grid, Typography, Button } from "@material-ui/core/";
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

  goBack:{
paddingTop: "28px",
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
        <Grid item xs={12} md={4} style={{ borderRight: "1px solid #efefef" }}> 
          <Credibility outcome={credibilityObj} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Objectivity displayObjectivity={objectivityScore} />
        </Grid>
        <Grid item xs={12} md={4}>
          <Polarity displayPolarity={polarityScore} />
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.goBack}>
        <Typography variant="body2" className={classes.goBackText}></Typography>
              <Button variant="contained" disableElevation className={classes.backButton} onClick={() => {
                props.setRequest("")
              }}>
                Analyse Again?
              </Button>
            </Grid>
    </div>
  );
}

export default DisplayResults;
