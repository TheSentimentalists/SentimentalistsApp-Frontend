import React from "react";
import { Grid, Typography, makeStyles, Tooltip } from "@material-ui/core/";
import Topic from "./Topics"
import HelpIcon from "@material-ui/icons/Help";
import "../../App.css";

const useStyles = makeStyles({
  ArticleSummaryText: {
    fontFamily: "Roboto, sans-serif",
    padding: "30px",
    textAlign: "left"
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

  blueChip: {
    backgroundColor: "#c7e2fc",
    margin: "3px",
    fontWeight: "700"
  },

  Help: {
    color: "#6bb26d"
  },

  HelpTooltip: {
    fontSize: "30px"
  }
});

function ArticleSummary(props) {
  const classes = useStyles();

  let articleTitle;
  let articleSummary;
  let topics;

  const generateSummaryText = () => {
    if (props.displayArticle.hasOwnProperty("error")) {
      articleTitle = "The Article Title could not be generated.";
      articleSummary = "The article summary could not be generated.";
      topics = "No topics";
    } else {
      articleTitle = props.displayArticle.header;
      articleSummary = props.displayArticle.summary;
      topics = props.displayArticle.topics;
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

  let topicsPeople = topics.filter(element => element.type === "PERSON")
  let topicsOrg = topics.filter(element => element.type === "ORG")
  let topicsGPE = topics.filter(element => element.type === "GPE")

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
        <Grid item xs={12}>
          <Typography variant="body2" className={classes.SummaryText}>
            {articleSummary}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item>
              <Topic topics={topicsPeople} type="PERSON" />
              <Topic topics={topicsGPE} type="GPE" />
              <Topic topics={topicsOrg} type="ORG" />
            </Grid>
            <Grid item>
              <Tooltip
                placement="bottom"
                arrow
                title={<p style={{ fontSize: "16px" }}>Keywords!</p>}
                className={classes.HelpTooltip}
              >
                <HelpIcon className={classes.Help} />
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ArticleSummary;
