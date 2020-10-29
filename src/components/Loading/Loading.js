import React from "react";
import ReactRotatingText from "react-rotating-text"
import heartgif from '../../assets/images/heart.gif';
import "../../App.css";

function Loading() {

  const loadingMessages = [
    'Analysing underlying sentiment...',
    'Converging opionated opions...',
    'Evaluating controversial topics...',
    'Calculating trust vectors...',
    'Extrapolating emotion exertion...',
    'Peeling political facade...'
  ]
  return (
    <div>
      <img src={heartgif} alt="Beating Heart" />
     <h2><ReactRotatingText 
     items={loadingMessages} 
     cursor={false}
     emptyPause={0}
     typingInterval={0}
     deletingInterval={0}
     /></h2>
    </div>
  );
}

export default Loading;
