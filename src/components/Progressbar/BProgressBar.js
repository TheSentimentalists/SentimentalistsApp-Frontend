import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

class BProgressBar extends React.Component {
  render() {
    return (
      <ProgressBar
        percent={75}
        filledBackground="linear-gradient(to right, #6BB26D, #EE445E)"
      />
    );
  }
}
export default BProgressBar;