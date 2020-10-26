import React from 'react';
import GaugeChart from 'react-gauge-chart';

function Objectivity(props){

const score = props.displayObjectivity;

    return(
        <div>
        <p>Objectivity</p>
        <GaugeChart
        textColor="#000000"
        id="objectivity-gauge" 
        percent={score}
        hideText={false}
        nrOfLevels={3}
        colors={["#ee445e", "#f8ce94", "#6bb26d"]}
        />
        <p>{props.displayObjectivity}</p>
        
        </div>
    )
}

export default Objectivity;