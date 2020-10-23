import React from "react";
import { Grid, Typography, makeStyles, Chip } from "@material-ui/core/";
import "../../App.css";


const useStyles = makeStyles({
  ArticleSummaryText: {
    fontFamily: "Roboto, sans-serif",
    padding: "10px",
    textAlign: "left",
  },
  ArticleTitle: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "18px",
  },
  ArticleURL: {
    fontSize: "14px",
    marginBottom: "10px",
  },
  SummaryText: {
    marginBottom: "12px",
    fontSize: "16px",
  },

  keywordChip : {
    backgroundColor: "#f8ce94",
    margin: "3px"
  }
});

function ArticleSummary() {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        justify="flex-start"
        direction="column"
        className={classes.ArticleSummaryText}
      >
        <Grid item xs={12}>
          <Typography variant="h4" className={classes.ArticleTitle}>
            Greater Manchester to get tier 3 Covid restrictions imposed after
            talks fail
          </Typography>
        </Grid>
        
        
        <Grid item xs={12}>
          
            <Typography variant="body1" className={classes.ArticleURL} noWrap>
              https://www.theguardian.com/world/2020/oct/20/government-fails-to-reach-deal-with-manchester-over-tier-3-covid-restrictions
            </Typography>
          
        </Grid>
        <Grid item xs={12} lg={9}>
          <Typography variant="body2" className={classes.SummaryText}>
            The summary of the article.The summary of the article.The summary of
            the article.The summary of the article.The summary of the article.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Keywords: 
            <Chip label="Boris Johnson" className={classes.keywordChip}/><Chip label="Brexit" className={classes.keywordChip}/><Chip label="Economy" className={classes.keywordChip}/>
            </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default ArticleSummary;