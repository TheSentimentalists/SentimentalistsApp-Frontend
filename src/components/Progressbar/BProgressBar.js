import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import Grid from '@material-ui/core/Grid';

function BProgressBar(){
  return(
    <div style={{border: "2px solid red"}}>
    <Grid container>
    <Grid item xs={10}>
    <ProgressBar
    percent={75}
    filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"/>
    </Grid>
    </Grid>
    </div>
  )
}
export default BProgressBar;