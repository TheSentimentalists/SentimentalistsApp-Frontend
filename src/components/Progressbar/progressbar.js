import React, { Component } from 'react';
import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
import ProgressBar from '@bit/react-bootstrap.react-bootstrap.progress-bar';
// Biasscore to replace 60//
class Example extends Component {
	render() {
		return (
			<div style={{ width: 400 }}>
				<ProgressBar now={60} /> 
			</div>
		);
	}
}
export default () => (
	<div>
		<ReactBootstrapStyle />
		<Example />
	</div>
);