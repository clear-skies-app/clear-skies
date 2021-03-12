import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { cityToCoords } from '../Utils/api-utils.js';
import { setCoordsInLocalStorage } from '../Utils/local-storage-utils.js';

export default class LocationPrompt extends Component {
	state = {
		city: '',
		coords: '',
	};

	handleLocationSubmit = async (e) => {
		e.preventDefault();
		const {
			props: { cookies, token },
			state: { city },
		} = this;
		try {
			const coords = await cityToCoords(city, token);
			await this.setState({ coords });
			setCoordsInLocalStorage(coords);
			await cookies.set('coords', JSON.stringify(coords), { path: '/' });
			await cookies.set('city', city, {
				path: '/',
			});
		} catch (error) {
			this.setState({ error: 'Please enter a city' });
		}
	};

	handleCityChange = (e) => {
		this.setState({ city: e.target.value });
	};

	render() {
		const {
			props: { name },
			state: { city },
		} = this;

		return (
			<>
				<Form onSubmit={this.handleLocationSubmit}>
					<Form.Group controlId='locationInput'>
						<Form.Label>
							{this.state.error && (
								<p style={{ color: 'red' }}>
									{this.state.error}
								</p>
							)}
							Welcome, {name}! Enter your city to get started.
						</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter your city'
							value={city}
							onChange={this.handleCityChange}
						/>
					</Form.Group>
					<Button type='submit' disabled={!city}>
						Go Explore!
					</Button>
				</Form>
			</>
		);
	}
}
