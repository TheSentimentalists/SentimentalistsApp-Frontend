import React from "react";
import GaugeChart from "react-gauge-chart";
import { Grid, Typography } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  objectivityGaugeHeading: {
    fontFamily: "Graduate, sans-serif",
    textAlign: "left",
    fontSize: "18px",
    paddingLeft: "35px",
    paddingBottom: "10px",
  },

  objectivityGauge: {
    marginTop: "15px",
  },

  objectivityText: {
    textAlign: "left",
    paddingLeft: "35px",
    fontSize: "16px",
  },
});

function Objectivity(props) {
  const classes = useStyles();
  const score = props.displayObjectivity;

  return (
    <div>
      <Grid containerjustify="center" direction="column">
        <Grid item xs={12}>
          <GaugeChart
            className={classes.objectivityGauge}
            textColor="#000000"
            id="objectivity-gauge"
            percent={score}
            hideText={false}
            nrOfLevels={3}
            colors={["#ee445e", "#f8ce94", "#6bb26d"]}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="subtitle2"
            className={classes.objectivityGaugeHeading}
          >
            Objectivity
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="body2" className={classes.objectivityText}>
            Quantifies the amount of factual information X personal opinion
            contained in the text. The higher objectivity means that the text
            contains factual information rather than personal opinion.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Objectivity;
