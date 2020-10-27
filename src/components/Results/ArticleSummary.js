import React from "react";
import { Grid, Typography, makeStyles, Chip } from "@material-ui/core/";
import "../../App.css";

const useStyles = makeStyles({
  ArticleSummaryText: {
    fontFamily: "Roboto, sans-serif",
    padding: "10px",
    textAlign: "left",
    marginBottom: "25px",
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

  keywordChip: {
    backgroundColor: "#f8ce94",
    margin: "3px",
    fontWeight: "700",
  },
});

function ArticleSummary(props) {
  const classes = useStyles();

  let articleTitle;
  let articleSummary;
  let keywords;

  const generateSummaryText = () => {
    if (props.displayArticle.hasOwnProperty("error")) {
      articleTitle = "The Article Title could not be generated.";
      articleSummary = "The article summary could not be generated.";
      keywords = "No keywords";
    } else {
      articleTitle = props.displayArticle.header;
      articleSummary = props.displayArticle.summary;
      keywords = props.displayArticle.keywords;
    }
  };
  generateSummaryText();

  const truncateSummaryText = () => {
    let truncatedSummary;
    if (articleSummary.length > 350) {
      truncatedSummary = articleSummary.slice(0, 350) + "...";
    }
    articleSummary = truncatedSummary;
  };

  truncateSummaryText();

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
            {articleTitle}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" className={classes.ArticleURL} noWrap>
            {props.displayURL}
          </Typography>
        </Grid>
        <Grid item xs={12} lg={9}>
          <Typography variant="body2" className={classes.SummaryText}>
            {articleSummary}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="body1">Keywords:</Typography>
          {keywords.map((word, index) => (
            <Chip
              key={index}
              label={word.charAt(0).toUpperCase() + word.slice(1)}
              className={classes.keywordChip}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

export default ArticleSummary;
