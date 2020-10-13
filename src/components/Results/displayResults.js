import React from "react";
import GaugeChart from "react-gauge-chart";
import Typography from '@material-ui/core/Typography';


function DisplayResults(props) {
  const resultsObj = JSON.parse(props.displayResults);
  const credibilityScore = (resultsObj[0].score / 100);
  // accesses score from credibility analysis, assigns it to a variable, 
  //the score is divided by 100 to provide the format required forthe percent prop on the gauge.

  
  return (
    <div>
      <h5>Credibility Score</h5>
      <GaugeChart
        id="main-gauge"
        percent={credibilityScore}
        hideText={false}
        textColor="black"
        nrOfLevels={3}
        colors={["#ee445e", "#6bb26d"]}
      />
      <p></p>
</div>
  );
}

export default DisplayResults;
