import React, { Component } from 'react';
import {
	Form,
	Button,
	FormGroup,
	FormLabel,
	FormControl,
} from 'react-bootstrap';
import { loginUser } from '../Utils/api-utils.js';
import {
	setCoordsInLocalStorage,
	setLocalStorage,
} from '../Utils/local-storage-utils.js';

export default class Login extends Component {
	state = {
		email: '',
		password: '',
	};
	handleEmailChange = (e) => {
		this.setState({ email: e.target.value });
	};
	handlePasswordChange = (e) => {
		this.setState({ password: e.target.value });
	};
	handleSubmit = async (e) => {
		const { cookies } = this.props;
		try {
			e.preventDefault();
			const user = await loginUser(this.state.email, this.state.password);

			// very cool!
			const coordsCookie = cookies.get('coords');
			console.log(coordsCookie);
			setCoordsInLocalStorage(coordsCookie);
			setLocalStorage(user);
			this.props.handleNewUser();
			this.props.props.history.push('/skyview');
		} catch (error) {
			this.setState({ error: 'Please enter a valid email and password' });
		}
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				{this.state.error && (
					<p style={{ color: 'red' }}>{this.state.error}</p>
				)}
				Login
				<FormGroup controlId='loginEmail'>
					<FormLabel>Email address</FormLabel>
					<FormControl
						type='email'
						placeholder='Enter email'
						onChange={this.handleEmailChange}
						value={this.state.email}
					/>
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
				</FormGroup>
				<FormGroup controlId='loginPassword'>
					<FormLabel>Password</FormLabel>
					<FormControl
						type='password'
						placeholder='Password'
						onChange={this.handlePasswordChange}
						value={this.state.password}
					/>
				</FormGroup>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		);
	}
}
