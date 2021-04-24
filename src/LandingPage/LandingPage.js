import React, { Component } from 'react';
import SignUp from '../AuthPages/SignUp.js';
import Login from '../AuthPages/Login.js';
import { Tabs, Tab, Alert, ListGroup } from 'react-bootstrap';
import './LandingPage.css';
import CarouselComp from './CarouselComp.js';

export default class LandingPage extends Component {
	render() {
		const { cookies, handleNewUser } = this.props;
		return (
			<main className='landingPage grid-container'>
				<section className='carousel'>
					{/* good idea, abstracting this into its own component even though it taks no props */}
					<CarouselComp />
				</section>
				<Alert variant='dark' className='tips styled-container'>
					<Alert.Heading>Welcome to Clear Skies!</Alert.Heading>
					<hr />
					<p>
						Please create an account or login to explore your
						Virtual Sky and plan your next stargazing adventure!
						Feel free to check out the resources below for more fun
						astronomy information. Happy Exploring!
					</p>
					<Alert.Heading>Astronomy Resources</Alert.Heading>
					<hr />
					<ListGroup variant='flush'>
						<ListGroup.Item variant='dark'>
							<a
								href='https://skyandtelescope.org/celestial-objects-observe/'
								target='_blank'
								rel='noreferrer'>
								15 Types of Celestial Objects to Observe
							</a>
						</ListGroup.Item>
						<ListGroup.Item variant='dark'>
							<a
								href='https://skyandtelescope.org/astronomy-equipment/how-to-choose-a-telescope/'
								target='_blank'
								rel='noreferrer'>
								How to Choose your First Telescope
							</a>
						</ListGroup.Item>
						<ListGroup.Item variant='dark'>
							<a
								href='https://skyandtelescope.org/observing/make-a-star-wheel/'
								target='_blank'
								rel='noreferrer'>
								Guide to Make Your Own Star Wheel
							</a>
						</ListGroup.Item>
						<ListGroup.Item variant='dark'>
							<a
								href='https://skyandtelescope.org/astronomy-resources/stargazing-basics/family-projects-and-experiments/'
								target='_blank'
								rel='noreferrer'>
								Family Fun with Sky Watching
							</a>
						</ListGroup.Item>
						<ListGroup.Item variant='dark'>
							<a
								href='http://astronomy.tools/'
								target='_blank'
								rel='noreferrer'>
								Astronomy Tools
							</a>
						</ListGroup.Item>
						<ListGroup.Item variant='dark'>
							<a
								href='https://skyandtelescope.org/wp-content/uploads/GettingStartedNorth.pdf'
								target='_blank'
								rel='noreferrer'>
								Getting Started in Astronomy – Northern
								Hemisphere
							</a>
						</ListGroup.Item>
						<ListGroup.Item variant='dark'>
							<a
								href='https://skyandtelescope.org/wp-content/uploads/GettingStartedSouth.pdf'
								target='_blank'
								rel='noreferrer'>
								Getting Started in Astronomy – Southern
								Hemisphere
							</a>
						</ListGroup.Item>
					</ListGroup>
				</Alert>
				<aside className='sideBar'>
					{/* loving this use of Tabs! */}
					<Tabs
						defaultActiveKey='signup'
						transition={false}
						id='userAuth'>
						<Tab eventKey='signup' title='New Users'>
							<SignUp
								cookies={cookies}
								props={this.props}
								handleNewUser={handleNewUser}
							/>
						</Tab>
						<Tab eventKey='login' title='Current User'>
							<Login
								cookies={cookies}
								props={this.props}
								handleNewUser={handleNewUser}
							/>
						</Tab>
					</Tabs>
				</aside>
			</main>
		);
	}
}
