import React from "react";
import GaugeChart from 'react-gauge-chart'

function DisplayResults(props) {
  return (
    <div>
      <h5>Some results</h5>
      <GaugeChart id="gauge-chart1" />
      <p>{props.displayResults}</p>
    </div>
  );
}

export default DisplayResults;
