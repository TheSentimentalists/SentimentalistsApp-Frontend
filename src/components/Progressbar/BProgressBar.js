import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar,  } from "react-step-progress-bar";
import Grid from '@material-ui/core/Grid';

function BProgressBar(){

let percentage = 80
let fgcolor
 
if (percentage < 30) {
  fgcolor = "linear-gradient(to right, #e60202, #7d1225)";
} else if(percentage >= 30 && percentage < 70) {
  fgcolor = "linear-gradient(to right, #ffcf53, #e79b37)";
} else {
  fgcolor = "linear-gradient(to right, #396f5c, #5ba45b)";
}

  return(
    <div>
    <Grid container justify ="center" 
    alignItems = "center"
    border = "2px solid #F8CE94">
    <Grid alignItems = "center"
    item xs ={10} sm={10} md={10} lg={10} >
      TrustScore
    </Grid>
    <Grid item xs ={10} sm={10} md={10} lg={10}>
    <ProgressBar
    percent={percentage}
    unfilledBackground="lightgrey"
    filledBackground={fgcolor} />
    </Grid>
    </Grid>
    </div>
  )
}
export default BProgressBar;