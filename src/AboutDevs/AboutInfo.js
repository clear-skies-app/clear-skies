import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

export default class AboutInfo extends Component {
	render() {
		const { display, name, text, handleDisplayToggle } = this.props;
		return (
			<section className='about-info-container'>
				<p style={{ fontFamily: 'moonlight' }} className='about-info'>
					Meet the astro-devs behind Clear Skies, your personal
					star-gazing adventure app! <br />
					Click on any of our orbiting objects to read more about the
					developer.
				</p>
				{display ? (
					<Alert
						className='about-info'
						onClose={handleDisplayToggle}
						dismissible>
						<Alert.Heading style={{ fontFamily: 'astrospace' }}>
							{name}
						</Alert.Heading>
						<p style={{ fontFamily: 'moonlight' }}>{text}</p>
					</Alert>
				) : null}
			</section>
		);
	}
}
