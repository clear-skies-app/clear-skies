import React, { Component } from 'react';
import { Navbar, Button, Nav, NavDropdown } from 'react-bootstrap';

export default class Header extends Component {
	render() {
		return (
			<Navbar bg='dark' expand='lg'>
				<Navbar.Brand href='/'>Clear Skies</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link href='/'>Home</Nav.Link>
						<Nav.Link href='/about'>About Devs</Nav.Link>
						<NavDropdown title='Sky View' id='basic-nav-dropdown'>
							<NavDropdown.Item href='/skyview'>
								Sky View
							</NavDropdown.Item>
							<NavDropdown.Item href='/observations'>
								Observations
							</NavDropdown.Item>
							<NavDropdown.Item href='/catalog'>
								My Observations
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Button
						variant='outline-success'
						onClick={this.props.handleLogout}>
						Log out
					</Button>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
