import React from "react";
import GaugeChart from "react-gauge-chart";
import { Grid, Typography, Tooltip } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import HelpIcon from "@material-ui/icons/Help";

const useStyles = makeStyles({
  polarityGaugeHeading: {
    fontFamily: "Graduate, sans-serif",
    textAlign: "left",
    fontSize: "18px",
    paddingLeft: "35px",
    paddingBottom: "10px",
  },


  polarityText: {
    textAlign: "left",
    paddingLeft: "35px",
    fontSize: "16px",
  },

  polarityTooltip: {
    fontSize: "30px",
  },

  polarityHelp: {
    color: "#6bb26d",
    cursor: "pointer"
  },
});

function Polarity(props) {
  const classes = useStyles();
  console.log(props.displayPolarity)
  const polscore = (props.displayPolarity+1)/2; //normalize -1 to +1 scale to 0-1, then convert to a percentage
  let polemoji = ''

  if (polscore < 0.25) {
    polemoji = '😡' 
  } else if (polscore >= 0.25 && polscore < 0.45) {
    polemoji = '🙁' 
  } else if (polscore >= 0.45 && polscore < 0.55) {
    polemoji = '😐' 
} else if (polscore >= 0.55 && polscore < 0.75) {
    polemoji = '😊' 
} else if (polscore >= 0.75 && polscore < 1) {
    polemoji = '😃' 
}

  return (
    <div>
      <Grid container justify="center" direction="column">
        <Grid item xs={12}>
          <GaugeChart
            className={classes.polarityGauge}
            textColor="#000000"
            id="polarity-gauge"
            percent={polscore}
            hideText={false}
            nrOfLevels={3}
            colors={["#e62a4c", "#d1d1d1", "#6bb26d"]}
            formatTextValue={() => polemoji}
            arcsLength={[0.45, 0.1, 0.45]}
            needleColor="#d9d9d9"
            
          />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="flex-start" alignItems="flex-start">
            <Grid item>
              <Typography
                variant="subtitle2"
                className={classes.polarityGaugeHeading}
              >
                Polarity
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip
                placement="bottom"
                arrow
                className={classes.polarityTooltip}
                title={
                  <p style={{ fontSize: "16px" }}>
                    Measures the emotion behind the article, from negative to positive.
                  </p>
                }
              >
                <HelpIcon className={classes.polarityHelp} />
              </Tooltip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Polarity;
