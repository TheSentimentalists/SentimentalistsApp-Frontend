import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import Grid from '@material-ui/core/Grid';

function BProgressBar(){
  return(
    <div>
    <Grid container justify ="center" 
    alignItems = "center"
    border = "2px solid #F8CE94">
    <Grid alignItems = "center"
    item xs ={10} sm={10} md={10} lg={10} >
      BiasScore
    </Grid>
    <Grid item xs ={10} sm={10} md={10} lg={10}>
    <ProgressBar
    percent={75}
    filledBackground="linear-gradient(to right, #6BB26D, #EE445E)"/>
    </Grid>
    </Grid>
    </div>
  )
}
export default BProgressBar;