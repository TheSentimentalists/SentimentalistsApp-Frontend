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
        item xs ={5} sm={5} md={5} lg={5}>
        Bias Score
      </Grid>
      <Grid 
        style={{border: "2px solid red",borderRadius:"2000px"}}
        item xs ={10} sm={10} md={10} lg={10}>
        <ProgressBar
        percent={49.5}
        filledBackground="linear-gradient(to right, #6BB26D, #EE445E)"
        unfilledBackground="#FFF8CE94"
        />
      </Grid>
      </Grid>
    </div>
  )
}
export default BProgressBar;