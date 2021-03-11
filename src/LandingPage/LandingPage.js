import React, { Component } from 'react';
import SignUp from '../AuthPages/SignUp.js';
import Login from '../AuthPages/Login.js';
import { Tabs, Tab } from 'react-bootstrap';
import './LandingPage.css';
import CarouselComp from './CarouselComp.js';

export default class LandingPage extends Component {
	render() {
		return (
			<main className='landingPage grid-container'>
				<section className='carousel'>
					<CarouselComp />
				</section>
				<section className='tips styled-container'>
					<h1>Resources</h1>
					<ul>
						<li>
							<a
								href='https://skyandtelescope.org/celestial-objects-observe/'
								target='_blank'
								rel='noreferrer'>
								15 Types of Celestial Objects to Observe
							</a>
						</li>
						<li>
							<a
								href='https://skyandtelescope.org/astronomy-equipment/how-to-choose-a-telescope/'
								target='_blank'
								rel='noreferrer'>
								How to Choose your First Telescope
							</a>
						</li>
						<li>
							<a
								href='https://skyandtelescope.org/observing/make-a-star-wheel/'
								target='_blank'
								rel='noreferrer'>
								Guide to Make Your Own Star Wheel
							</a>
						</li>
						<li>
							<a
								href='https://skyandtelescope.org/astronomy-resources/stargazing-basics/family-projects-and-experiments/'
								target='_blank'
								rel='noreferrer'>
								Family Fun with Sky Watching
							</a>
						</li>
						<li>
							<a
								href='http://astronomy.tools/'
								target='_blank'
								rel='noreferrer'>
								Astronomy Tools
							</a>
						</li>
						<li>
							<a
								href='https://skyandtelescope.org/wp-content/uploads/GettingStartedNorth.pdf'
								target='_blank'
								rel='noreferrer'>
								Getting Started in Astronomy – Northern
								Hemisphere
							</a>
						</li>
						<li>
							<a
								href='https://skyandtelescope.org/wp-content/uploads/GettingStartedSouth.pdf'
								target='_blank'
								rel='noreferrer'>
								Getting Started in Astronomy – Southern
								Hemisphere
							</a>
						</li>
					</ul>
				</section>
				<aside className='sideBar'>
					<Tabs
						defaultActiveKey='login'
						transition={false}
						id='userAuth'>
						<Tab eventKey='login' title='Current User'>
							<Login
								props={this.props}
								handleNewUser={this.props.handleNewUser}
							/>
						</Tab>
						<Tab eventKey='signup' title='New Users'>
							<SignUp
								props={this.props}
								handleNewUser={this.props.handleNewUser}
							/>
						</Tab>
					</Tabs>
				</aside>
			</main>
		);
	}
}
