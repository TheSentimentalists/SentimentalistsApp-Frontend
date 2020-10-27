import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  trustScoreHeader: {
    textAlign: "center",
    paddingBottom: "20px",
  },
});

function BProgressBar(props) {
  const classes = useStyles();

  let percentage = props.Bscore.outcome.score;
  let fgcolor;

  if (percentage < 30) {
    fgcolor = "linear-gradient(to right, #e60202, #7d1225)";
  } else if (percentage >= 30 && percentage < 70) {
    fgcolor = "linear-gradient(to right, #ffcf53, #e79b37)";
  } else {
    fgcolor = "linear-gradient(to right, #396f5c, #5ba45b)";
  }

  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <Typography variant="h5" className={classes.trustScoreHeader}>
            Trust Score
          </Typography>
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
export default BProgressBar;
