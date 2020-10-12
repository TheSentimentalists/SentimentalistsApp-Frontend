import React, { useState } from "react";
import GaugeChart from "react-gauge-chart";


function DisplayResults(props) {
  const resultsObj = JSON.parse(props.displayResults);
  const credibilityScore = (resultsObj[0].score / 100);
  // accesses score from credibility analysis, assigns it to a variable, 
  //the score is divided by 100 to provide the format required forthe percent prop on the gauge.

  const [ supportingText, setSupportingText ] = useState("");

  
  
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
      <p onLoad={() => setSupportingText()}></p>
</div>
  );
}

export default DisplayResults;
