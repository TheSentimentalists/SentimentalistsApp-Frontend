import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";
import Grid from '@material-ui/core/Grid';

function BProgressBar(){
  return(
    <div>
      <Grid container 
      spacing = {1}
      justify ="center" 
      alignItems = "center"
      >
      <Grid 
        item align = "center"
        item xs ={5} sm={5} md={5} lg={5} >
        Bias Score
      </Grid>
      <Grid 
        item xs ={10} sm={10} md={10} lg={10}>
        <ProgressBar
        percent={30}
        unfilledBackground="linear-gradient(to right, #6BB26D, #EE445E)"/>
      </Grid>
      </Grid>
    </div>
  )
}
export default BProgressBar;