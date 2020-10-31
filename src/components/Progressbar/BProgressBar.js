import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  trustScoreHeader: {
    textAlign: "left",
    paddingLeft: "20px",
    paddingRight: "20px",
    paddingBottom: "10px",
    paddingTop: "20px"
  },

  trustScore: {
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingBottom: "20px"
  }
});

function BProgressBar(props) {
  const classes = useStyles();

  let percentage = (100 - props.Bscore);
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
      <Grid container justify="left">
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.trustScoreHeader}>
            Trust Score
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.trustScore} >
          <ProgressBar
            percent={percentage}
            unfilledBackground="lightgrey"
            filledBackground={fgcolor}
            height={15}
            width='100%'
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default BProgressBar;
