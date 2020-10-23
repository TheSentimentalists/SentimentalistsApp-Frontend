import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GaugeChart from "react-gauge-chart";
import { Grid, Chip } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import "../../App.css";

const useStyles = makeStyles({
  credibilityGaugeHeading: {
    fontFamily: "Graduate, sans-serif",
    textAlign: "left",
    fontSize: "18px",
    paddingLeft: "35px",
    paddingBottom: "10px",
  },

  resultsHeading: {
    fontFamily: "Graduate, sans-serif",
  },

  categoryTitle: {
    fontFamily: "Roboto, sans-serif",
    textAlign: "left",
    paddingLeft: "45px",
  },

  categoryChip: {
    background: "#f8ce94",
    fontFamily: "Roboto, sans-serif",
  },

  categoryText: {
      paddingLeft: "45px",
      textAlign: "left",
      paddingRight: "10px",
      marginBottom: "15px"

  }
});

function Credibility(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        justify="center"
        direction="column"
        style={{ border: "2px solid red" }}
      >
        <Grid item xs={12}>
          <GaugeChart
            className={classes.mainGauge}
            id="main-gauge"
            percent={props.credibilityScore}
            hideText={false}
            textColor="#000000"
            nrOfLevels={3}
            colors={["#ee445e", "#f8ce94", "#6bb26d"]}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" className={classes.credibilityGaugeHeading}>
            Credibility
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" className={classes.categoryTitle}>
            Category:{" "}
            <Chip label={props.category} className={classes.categoryChip} />
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body1" className={classes.categoryText}>
            The definition of a credible source can change depending on the
            discipline, but in general, a credible source
            is one that is unbiased and is backed up with evidence. 
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Credibility;
