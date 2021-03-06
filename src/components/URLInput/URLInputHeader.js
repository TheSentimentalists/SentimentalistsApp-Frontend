import React from "react";
import Grid from "@material-ui/core/Grid";
import Logo from "../../assets/images/Sentimentalists_Logo_270X273.png";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "../../App.css";

const useStyles = makeStyles({
  mainLogo: {
    display: "block",
    width: "100%",
    height: "auto",
    padding: "10px",
    maxHeight: "270px",
    maxWidth: "273px",
    margin: "auto",
  },

  mainHeading: {
    fontSize: "22px",
    textAlign: "center",
    fontFamily: "Graduate, sans-serif",
    marginBottom: "50px",
  },

  appDescription: {
    textAlign: "left",
    fontFamily: "Roboto, sans-serif",
    marginTop: "18px",
    marginBottom: "25px",
    paddingLeft: "10px",
  },
});

function URLInputHeader() {
  const classes = useStyles();

  return (
    <Grid container justify="center">
      <Grid item xs={7} sm={5} md={4} lg={4}>
        <img
          src={Logo}
          alt="The Sentimentalists Logo"
          className={classes.mainLogo}
        />
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h1" className={classes.mainHeading}>
          Analysing Media
          <br />
          Sentiment Since 2020
        </Typography>
      </Grid>
    </Grid>
  );
}

export default URLInputHeader;
