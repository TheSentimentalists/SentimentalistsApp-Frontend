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
  },
});

function ArticleSummary() {
  const classes = useStyles();

  return (
    <div>
      <Grid container justify="center" className={classes.ArticleSummaryText}>
        <Grid item xs={10}>
          <Typography variant="h4" className={classes.ArticleTitle}>
            Greater Manchester to get tier 3 Covid restrictions imposed after
            talks fail
          </Typography>
        </Grid>
        <Typography variant="body1" className={classes.ArticleURL}>
          https://www.theguardian.com/world/2020/oct/20/government-fails-to-reach-deal-with-manchester-over-tier-3-covid-restrictions
        </Typography>
        <Typography variant="body2">
          The summary of the article.The summary of the article.The summary of
          the article.The summary of the article.The summary of the article.
        </Typography>
        <Typography variant="body1">
          Keywords: Boris Johnson, Brexit, Economy
        </Typography>
      </Grid>
    </div>
  );
}

export default ArticleSummary;
