import React, { Component } from 'react';

export default class VirtualSky extends Component {
	render() {
		const { coords } = this.props;

		const virtualSkyURL = `https://virtualsky.lco.global/embed/index.html?longitude=${coords.lon}&latitude=${coords.lat}&projection=stereo&constellations=true&constellationlabels=true&showstarlabels=true&live=true&az=243.5`;
		return (
			<iframe
				title='virtualSky'
				width='900'
				height='500'
				scrolling='no'
				marginHeight='0'
				marginWidth='0'
				src={virtualSkyURL}
				allowtransparency='true'
			/>
		);
	}
}
