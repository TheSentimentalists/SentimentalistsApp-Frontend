import React from "react";
import BarChart from "gradient-barchart";
import 

function DisplayResults(props) {
  const resultsObj = JSON.parse(props.displayResults);
  const DATA = [{Type:resultsObj[0].Type,value:resultsObj[0].score, color:"#ee445e"}];
  return (
    <div>
      <h3>Credibility results</h3>
      <BarChart
      data={DATA}
      width={500}
      height={100}
      />
    </div>
  );
}
export default DisplayResults;
