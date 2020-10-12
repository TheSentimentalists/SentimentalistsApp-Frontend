import React from "react";
import GaugeChart from 'react-gauge-chart'

function DisplayResults(props) {
  const resultObj = JSON.parse(props.displayResults);
  const credibilityScore = (resultObj[0].score / 100);
  //accesses score from credibility analysis, assigns it to a variable,
  //the score is divided by 100 to provide the format required for the percent prop on the gauge

  return (
    <div>
      <h5>Credibility Score</h5>
      <GaugeChart 
      id="gauge-chart1"
      percent = {credibilityScore}
      hideText = {false}
      textColor = "black"
      nrOfLevels= {3}
      colors={["#ee445e", "#6bb26d", "red"]}      
      />
      <h5>This source is fairly credible but you might want to be wary beacuse it has a tendency towards speculation and Fake News</h5>
      //<p>{props.displayResults}</p>
    </div>
  );
}

export default DisplayResults;
