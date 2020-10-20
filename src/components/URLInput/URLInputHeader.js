import React from "react";
import Grid from "@material-ui/core/Grid";
import Logo from "../../assets/images/Sentimentalists Logo.png";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import "../../App.css";

const useStyles = makeStyles({
  mainLogo: {
    display: "block",
    width: "100%",
    height: "auto",
    padding: "10px",
  },
  mainHeading: {
    fontSize: "22px",
    textAlign: "center",
    fontFamily: "Graduate, sans-serif",
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
      <Grid item xs={8} sm={6} md={4} lg={3}>
        <img
          src={Logo}
          alt="The Sentimentalists Logo"
          className={classes.mainLogo}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h1" className={classes.mainHeading}>
          Analysing Media
          <br />
          Sentiment Since 2020
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={6} lg={5}>
        <Typography variant="body2" className={classes.appDescription}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default URLInputHeader;
