import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Tooltip } from "@material-ui/core/";
import HelpIcon from "@material-ui/icons/Help";

const useStyles = makeStyles({
  trustScoreHeader: {
    textAlign: "center",
    paddingBottom: "20px",
  },
  trustScoreTooltip: {
    fontSize: "30px",
  },

  trustScoreHelp: {
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
    fgcolor = "linear-gradient(to right, #e79b37, #ffcf53)";
    trustmoji = '😐';

  } else {
    fgcolor = "linear-gradient(to right, #5ba45b, #396f5c)";
    trustmoji = '😃';
  }

  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <Typography variant="h5" className={classes.trustScoreHeader}>
            Trust Indicator
          </Typography>
          <Grid item>
          formatTextValue={trustmoji}
            <Tooltip
                placement="bottom"
                arrow
                className={classes.trustScoreTooltip}
                title={
                  <p style={{ fontSize: "16px" }}>
                    Indicating the TrustWorthiness of an article.
                  </p>
                }
              >
                <HelpIcon className={classes.trustScoreHelp} />
            </Tooltip>
          </Grid>    
        </Grid>
        <Grid item xs={10} sm={10} md={10} lg={10}>
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