import React, { Component } from 'react';
import SignUp from '../AuthPages/SignUp.js';
import Login from '../AuthPages/Login.js';
import { Tabs, Tab } from 'react-bootstrap';
import './LandingPage.css';
export default class LandingPage extends Component {
	render() {
		return (
			<main className='landingPage grid-container'>
				<section className='carousel'>Carousel main section</section>
				<content className='tips'>Astronomy Tips</content>
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
