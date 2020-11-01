import React from "react";
import { Grid, Typography, makeStyles, Tooltip } from "@material-ui/core/";
import Topic from "./Topic"
import HelpIcon from "@material-ui/icons/Help";
import "../../App.css";

const useStyles = makeStyles(theme => ({
  ArticleSummaryText: props => ({
    fontFamily: "Roboto, sans-serif",
    textAlign: "left",
    padding: "30px",
    [theme.breakpoints.up('lg')]: {
      background: `linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 70%, rgba(255, 255, 255, 0) 85%), url(${props.articleImage})`,
      backgroundSize: "auto 100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right center"
    },
}),
  ArticleTitle: {
    fontSize: "20px",
    fontWeight: "700",
    marginBottom: "18px",
  },

  SummaryText: {
    marginBottom: "12px",
    fontSize: "16px",
  },
  Help: {
    color: "#6bb26d"
  },
  HelpTooltip: {
    fontSize: "30px"
  }
}));

function ArticleSummary(props) {

  let articleTitle;
  let articleSummary;
  let articleImage = "";
  let topics;

  if(typeof props.displayArticle.image === 'string') {
    articleImage = props.displayArticle.image
  }

  const classes = useStyles({articleImage});

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

  let calculatedTopics = [];

  if(typeof topics === "object") { 
    calculatedTopics.push({"type":"PERSON", "topics":(topics.filter(element => element.type === "PERSON"))})
    calculatedTopics.push({"type":"ORG", "topics":(topics.filter(element => element.type === "ORG"))})
    calculatedTopics.push({"type":"GPE", "topics":(topics.filter(element => element.type === "GPE"))})
    calculatedTopics.push({"type":"WORK_OF_ART", "topics":(topics.filter(element => element.type === "WORK_OF_ART"))})
    calculatedTopics.push({"type":"EVENT", "topics":(topics.filter(element => element.type === "EVENT"))})

    calculatedTopics = calculatedTopics.filter(element => element.topics.length > 0)
  } else {
    topics = false
  }

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


        <Grid item xs={12} lg={9}>
          <Typography variant="body2" className={classes.SummaryText}>
            {articleSummary}
          </Typography>
        </Grid>
        {topics &&
        <Grid item xs={12}>
          <Grid container>
            <Grid item>
              {calculatedTopics.map((element) => (
                <Topic type={element.type} topics={element.topics} />
              ))}
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
        }
      </Grid>
    </div>
  );
}

export default ArticleSummary;
