import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Tooltip } from "@material-ui/core/";
import HelpIcon from "@material-ui/icons/Help";

const useStyles = makeStyles({
  trustScoreHeader: {
    textAlign: "left",
    paddingBottom: "20px",
  },

  trustScoreTooltip: {
    fontSize: "30px",
  },

  trustScoreHelp: {
    textAlign: "right",
    color: "#6bb26d",
  },
});

function TrustScore(props) {
  const classes = useStyles();

  let percentage = props.Bscore;
  let fgcolor;
  let trustmoji;

  if (percentage < 30) {
    fgcolor = "linear-gradient(to right, #7d1225, #e60202 )";
    trustmoji = '🙁';

  } else if (percentage >= 30 && percentage < 70) {
    fgcolor = "linear-gradient(to right, #ffcf53, #e79b37)";
    trustmoji = '😐';

  } else {
    fgcolor = "linear-gradient(to right, #5ba45b, #396f5c)";
    trustmoji = '😃';
  }

  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <Grid container justify ="left" >
          <Typography variant="h5" className={classes.trustScoreHeader}>
            Trust Indicator
          </Typography>
          <Grid>
            <Tooltip
                className={classes.trustScoreTooltip}
                title={
                  <p style={{ fontSize: "16px" }}>
                    Trust indicator breifly provides Trustworthiness of an article. It is calculated with equal weightage on Credibility, Objectivity and Polarity of the Article. A Green progress bar means article has Trustworthiness greater than 70%, a yellow bar means the article has Trustworthiness between 30% to 70%  and a red bar means that the article has Trustworthiness less than 30%.
                  </p>
                }
              >
              <HelpIcon className={classes.trustScoreHelp} />
            </Tooltip>
          </Grid>
          </Grid>

        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={10}>
        <Grid item  justify="center">
            {trustmoji}
        </Grid>    
          <ProgressBar
            percent={percentage}
            unfilledBackground="lightgrey"
            filledBackground={fgcolor}
            height={15}
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default TrustScore;