import {
	Form,
	Button,
	FormGroup,
	FormLabel,
	FormControl,
} from 'react-bootstrap';
import { loginUser } from '../Utils/api-utils.js';
import { setLocalStorage } from '../Utils/local-storage-utils.js';

import React, { Component } from 'react';

export default class SignUp extends Component {
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
		e.preventDefault();
		const user = await loginUser(this.state.email, this.state.password);
		setLocalStorage(user);
		this.props.handleNewUser();
		this.props.props.history.push('/skyview');
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				Login
				<FormGroup controlId='formBasicEmail'>
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
				<FormGroup controlId='formBasicPassword'>
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
