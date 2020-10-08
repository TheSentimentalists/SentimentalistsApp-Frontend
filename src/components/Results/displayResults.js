import React from "react";

function DisplayResults(props) {
  return (
    <div>
      <h5>Some results</h5>
      <p>{props.displayResults}</p>
    </div>
  );
}

export default DisplayResults;
