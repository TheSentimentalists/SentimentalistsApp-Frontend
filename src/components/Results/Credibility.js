import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GaugeChart from "react-gauge-chart";
import { Grid, Chip, Tooltip } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import HelpIcon from "@material-ui/icons/Help";
import "../../App.css";

const useStyles = makeStyles({
  credibilityGaugeHeading: {
    fontFamily: "Graduate, sans-serif",
    textAlign: "left",
    fontSize: "18px",
    paddingLeft: "35px",
    paddingBottom: "10px"
  },

  resultsHeading: {
    fontFamily: "Graduate, sans-serif"
  },

  categoryTitle: {
    fontFamily: "Roboto, sans-serif",
    textAlign: "left",
    paddingLeft: "45px",
    fontWeight: "600",
    marginBottom: "5px  "
  },

  categoryChip: {
    background: "#f8ce94",
    fontFamily: "Roboto, sans-serif",
    fontWeight: "600"
  },

  sourceChip: {
    background: "#f8ce94",
    fontFamily: "Roboto, sans-serif",
    cursor: "pointer"
  },

  chipLink: {
    textDecoration: "underline",
    color: "#000000"
  },

  categoryText: {
    textAlign: "left",
    paddingRight: "10px",
    marginBottom: "15px"
  },

  credibilityHelp: {
    color: "#6bb26d"
  },

  credibilityTooltip: {
    fontSize: "30px",
    color: "#6bb26d",
    marginBottom: "5px",
    cursor: "pointer"
  },
});

function Credibility(props) {
  const classes = useStyles();
  let score;
  let category;
  let source;

  const handleError = () => {
    if (props.hasOwnProperty("error")) {
      score = 0;
      category = "No Category Available";
      source = "No Source Available";
    } else {
      score = props.outcome.score / 100;
      category = props.outcome.category;
      source = props.outcome.source;
    }
  };
  handleError();

  const handleNoCredibilityScore = () => {
    if (isNaN(score)) {
      score = 0;
      category = "No Category Available";
      source = "No Source Available";
    }
  };

  handleNoCredibilityScore();

  let categoryText = () => {
    switch (category) {
      case "Left Center":
        categoryText = `These media sources have a slight to moderate liberal bias. 
        They often publish factual information that utilizes loaded words 
        (wording that attempts to influence an audience by using appeal to emotion or stereotypes)
         to favor liberal causes. These sources are generally trustworthy for information, but
        may require further investigation.`;
        break;
      case "Left":
        categoryText = `These media sources are moderately to strongly biased toward liberal causes through
          story selection and/or political affiliation. They may utilize strong loaded words 
          (wording that attempts to influence an audience by using appeal to emotion or stereotypes),
          publish misleadingreports and omit reporting of information that may damage liberal causes.
          Some sources in this category may be untrustworthy.`;
        break;
      case "Right Center":
        categoryText = `These media sources are slightly to moderately conservative in bias. 
          They often publish factual information that utilizes loaded words (wording that attempts
             to influence an audience by using appeal to emotion or stereotypes) to favor conservative
              causes. These sources are generally trustworthy for information, but may require further investigation.`;
        break;
      case "Right":
        categoryText = `These media sources are moderately to strongly biased toward conservative causes through
           story selection and/or political affiliation. They may utilize strong loaded words (wording that attempts 
            to influence an audience by using appeal to emotion or stereotypes), publish misleading reports and omit 
            reporting of information that may damage conservative causes. Some sources in this category may be untrustworthy`;
        break;
      case "Conspiracy":
        categoryText = `Sources in the Conspiracy-Pseudoscience category may publish unverifiable information that is
              not always supported by evidence. These sources maybe untrustworthy for credible/verifiable information, 
              therefore fact checking and further investigation is recommended on a per article basis when obtaining information
              from these sources`;
        break;
      case "Fake News":
        categoryText = `A questionable source exhibits one or more of the following: extreme bias, consistent promotion of 
                propaganda/conspiracies, poor or no sourcing to credible information, a complete lack of transparency and/or 
                is fake news. Fake News is the deliberate attempt to publish hoaxes and/or disinformation for the purpose of
                 profit or influence. Sources listed in the Questionable Category maybe very untrustworthy and should be fact 
                 checked on a per article basis. Please note sources on this listare not considered fake news unless specifically
                 written in the reasoning section for that source.`;
        break;
      default:
        categoryText = false;
    }
  };
  categoryText();

  return (
    <div>
      <Grid container justify="center" direction="column">
        <Grid item xs={12}>
          <GaugeChart
            className={classes.categoryGauge}
            id="main-gauge"
            percent={score}
            hideText={false}
            textColor="#000000"
            nrOfLevels={3}
            colors={["#ee445e", "#f8ce94", "#6bb26d"]}
            needleColor="#d9d9d9"
          />
        </Grid>
        <Grid item xs={9}>
          <Grid container direction="row" alignItems="center">
            <Typography
              variant="h5"
              className={classes.credibilityGaugeHeading}
            >
              Credibility
            </Typography>

            <Tooltip
              placement="bottom"
              arrow
              className={classes.credibilityTooltip}
              title={
                <p style={{ fontSize: "16px" }}>
                  Measures the credibility of the website that the article is
                  from.
                </p>
              }
            >
              <HelpIcon />
            </Tooltip>
          </Grid>
        </Grid>
        {categoryText && 
        <Grid item xs={12}>
          <Grid
            container
            justify="flex-start"
            alignItems="flex-start"
            style={{ marginBottom: "7px" }}
          >
            <Grid item xs={12}>
              <Grid container direction="row" alignItems="center">
                <Typography
                  variant="subtitle2"
                  className={classes.categoryTitle}
                >
                  Category: {"  "}
                </Typography>
                <Grid item>
                  <Tooltip
                    placement="bottom"
                    arrow
                    title={<p style={{ fontSize: "16px" }}>{categoryText}</p>}
                  >
                    <Chip
                      label={category + " ▾"}
                      style={{ fontSize: "14px" }}
                      className={classes.categoryChip}
                    />
                  </Tooltip>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        }
        <Grid item xs={12}>
          <Typography variant="subtitle2" className={classes.categoryTitle}>
            Source:{" "}
            <a
              href="https://mediabiasfactcheck.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.chipLink}
            >
              {source}
            </a>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Credibility;
