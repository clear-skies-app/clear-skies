import React, { Component } from 'react';
import './AboutDevs.css';
import AboutInfo from './AboutInfo';
import Orbit from './Orbit.js';

export default class AboutDevs extends Component {
	state = {
		name: '',
		text: '',
		display: false,
	};

	handleShowInfo = (name, text) => {
		this.setState({ name, text, display: !this.state.display });
	};

	handleDisplayToggle = () => this.setState({ display: !this.state.display });

	render() {
		const devBios = {
			lori:
				"Lori is a software developer who loves coding, hiking, dogs, and a steady rotation of Carl Sagan's Cosmos and Star Trek Next Gen.",
			juli:
				'Juli is a neurodivergent software developer with a passion for coding and astronomy. Her favorite astronomy experience was viewing the Andromeda Galaxy with her own eyes!',
			jake:
				'Jake Thrasher is a software engineer in Portland, OR. When he’s not developing software he enjoys making music, cooking, and good coffee.',
			cameron:
				'Cameron Zimmerman is a Software engineer from Silverdale, WA. Cameron hopes to better himself every day with exercise, code, and music.',
		};

		return (
			<section className='about-container'>
				<AboutInfo
					className='about-info-container'
					text={this.state.text}
					name={this.state.name}
					display={this.state.display}
					handleDisplayToggle={this.handleDisplayToggle}
				/>
				<div className='orbit-container'>
					<div className='center-star'></div>
					<Orbit
						orbitClass='cam-orbit'
						bodyClass='cam-body'
						handleShowInfo={this.handleShowInfo}
						handleHideInfo={this.handleHideInfo}
						text={devBios.cameron}
						name='Cameron'
					/>

					<Orbit
						orbitClass='lori-orbit'
						bodyClass='lori-body'
						handleShowInfo={this.handleShowInfo}
						handleHideInfo={this.handleHideInfo}
						text={devBios.lori}
						name='Lori'
					/>

					<Orbit
						orbitClass='juli-orbit'
						bodyClass='juli-body'
						handleShowInfo={this.handleShowInfo}
						handleHideInfo={this.handleHideInfo}
						text={devBios.juli}
						name='Juli'
					/>

					<Orbit
						orbitClass='jake-orbit'
						bodyClass='jake-body'
						handleShowInfo={this.handleShowInfo}
						handleHideInfo={this.handleHideInfo}
						text={devBios.jake}
						name='Jake'
					/>
				</div>
			</section>
		);
	}
}
