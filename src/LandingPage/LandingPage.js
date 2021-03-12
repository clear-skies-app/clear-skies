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
					<h1>Tips for Stargazing</h1>
					<ol>
						<li>
							Choose a clear, (mostly) moon-less night to go out
							and find a location away from city lights.
						</li>
						<li>
							Plan out your observations before heading out. This
							helps you to prepare any special equipment you may
							need and also avoids the issue of having to look up
							something on your device once you’re out in the
							dark. (You can use Clear Skies to help plan your
							next adventure! <p>&#128513;</p>
						</li>
						<li>
							Allow your eyes to become fully dark-adapted once
							you’re on-site. Plan to allow at least 30mins for
							this and try to avoid looking at any bright lights
							(phones, flashlights, full moon, etc.), as even a
							quick glance can break your dark adaptation and
							you’ll have to restart.
						</li>
						<li>
							Use “Averted Vision”, meaning looking slightly to
							the side of the object you’re observing. This uses
							your peripheral vision and helps you detect faint
							objects that are invisible when you stare directly
							at them.
						</li>
						<li>
							Pack a blanket, sweater, water, snacks, and a
							flashlight (just in case) and most importantly, HAVE
							FUN!
						</li>
						<li>
							Bonus: Remember, you don’t need any fancy equipment
							to have fun star-gazing and enjoying the awesomeness
							of our night skies. There is so much available to
							observe with just our human eye. Clear Skies!
						</li>
					</ol>
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
