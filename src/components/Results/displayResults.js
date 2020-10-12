import React from "react";
import GaugeChart from 'react-gauge-chart';

function DisplayResults(props) {
const resultsObj = JSON.parse(props.displayResults);
const credibilityScore = resultsObj[0].score
// accesses score from credibility analysis, assigns it to a variable to be passed as prop in to the gaugeChart;

 

  return (
    <div>
      <h5>Some results</h5>
      <p>{props.displayResults}</p>
      <GaugeChart id="main-gauge" hideText={true} textColor="black" nrOfLevels={10}/>
    </div>
  );
}

export default DisplayResults;
