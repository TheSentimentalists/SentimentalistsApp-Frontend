import React from "react";
import GaugeChart from "react-gauge-chart";
import { Grid, Typography, Tooltip } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import HelpIcon from "@material-ui/icons/Help";

const useStyles = makeStyles({
  objectivityGaugeHeading: {
    fontFamily: "Graduate, sans-serif",
    textAlign: "left",
    fontSize: "18px",
    paddingLeft: "35px",
    paddingBottom: "10px",
  },

  objectivityText: {
    textAlign: "left",
    paddingLeft: "35px",
    fontSize: "16px",
  },

  objectivityTooltip: {
    fontSize: "30px",
  },

  objectivityHelp: {
    color: "#6bb26d",
    cursor: "pointer"
  },
});

function Objectivity(props) {
  const classes = useStyles();
  const score = props.displayObjectivity;

  return (
    <div>
      <Grid container justify="center" direction="column">
        <Grid item xs={12}>
          <GaugeChart
            className={classes.objectivityGauge}
            textColor="#000000"
            id="objectivity-gauge"
            percent={score}
            hideText={false}
            nrOfLevels={3}
            colors={["#ee445e", "#f8ce94", "#6bb26d"]}
            needleColor="#d9d9d9"
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="flex-start" alignItems="flex-start">
            <Grid item>
              <Typography
                variant="subtitle2"
                className={classes.objectivityGaugeHeading}
              >
                Objectivity
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip
                placement="bottom"
                arrow
                className={classes.objectivityTooltip}
                title={
                  <p style={{ fontSize: "16px" }}>
                    Quantifies the amount of factual information X personal
                    opinion contained in the text. The higher objectivity means
                    that the text contains factual information rather than
                    personal opinion.
                  </p>
                }
              >
                <HelpIcon className={classes.objectivityHelp} />
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Objectivity;
