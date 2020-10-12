import React from "react";
import GaugeChart from 'react-gauge-chart';

function DisplayResults(props) {
  return (
    <div>
      <h5>Some results</h5>
      <p>{props.displayResults}</p>
      <GaugeChart id="main-gauge" hideText={true} textColor="black" nrOfLevels={10}/>
    </div>
  );
}

export default DisplayResults;
