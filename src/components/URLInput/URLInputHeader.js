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
