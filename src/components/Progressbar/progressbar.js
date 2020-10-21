import React from 'react';
import "react-step-progress-bar.css";
import { ProgressBar } from "react-step-progress-bar";

class ProgressBar extends React.Component {
  render() {
    return(
      <ProgressBar
      percent = {}
      filledBackground="linear-gradient(to right,#6bb26d, #ee445e)"
      />
    )
  }
}