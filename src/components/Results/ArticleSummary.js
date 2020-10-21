import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core/";
import "../../App.css";


const useStyles = makeStyles({
    ArticleSummaryText : {
        fontFamily: "Roboto, sans-serif",
        textAlign: "left",
    }, 
  ArticleTitle: {
    fontSize: "20px",
    fontWeight: "700",
    marginTop: "10px",
    marginBottom: "15px"
  },
  ArticleURL : {
    fontSize: "2vw",
    margin: "10px"
  }, 
  SummaryText : {
    margin: "10px"
  }
});

function ArticleSummary() {
  const classes = useStyles();

  return (
    <div>
      <Grid container justify="center" className={classes.ArticleSummaryText} style={{border: "3px solid red"}}>
        <Grid item xs={10}> 
          <Typography variant="h4" className={classes.ArticleTitle}>
            Greater Manchester to get tier 3 Covid restrictions imposed after
            talks fail
          </Typography>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="body1" className={classes.ArticleURL}>
          
          https://www.theguardian.com/world/2020/oct/20/government-fails-to-reach-deal-with-manchester-over-tier-3-covid-restrictions
          
        </Typography>
        </Grid>
        <Typography variant="body2" className={classes.SummaryText}>
          The summary of the article.The summary of the article.The summary of
          the article.The summary of the article.The summary of the article.
        </Typography>
        <Typography variant="body1">
          Keywords: Boris Johnson, Brexit, Economy
        </Typography>
      </Grid>
    </div>
  )
}

export default ArticleSummary;
