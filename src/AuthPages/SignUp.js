import { Form, Button } from 'react-bootstrap';
import { signupUser } from '../Utils/api-utils.js';
import { setLocalStorage } from '../Utils/local-storage-utils.js';

import React, { Component } from 'react';

export default class SignUp extends Component {
	state = {
		name: '',
		email: '',
		password: '',
	};
	handleNameChange = (e) => {
		this.setState({ name: e.target.value });
	};
	handleEmailChange = (e) => {
		this.setState({ email: e.target.value });
	};
	handlePasswordChange = (e) => {
		this.setState({ password: e.target.value });
	};
	handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const user = await signupUser(
                this.state.name,
                this.state.email,
                this.state.password
            );
            setLocalStorage(user);
            this.props.handleNewUser();
            this.props.props.history.push('/skyview');
            
        } catch (error) {
            this.setState({error: 'Please enter a name, email, and password'})
        }
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
                {this.state.error && <p style={{color:'red'}}>{this.state.error}</p>}
				Sign Up
				<Form.Group controlId='newUserName'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='name'
						placeholder='Enter name'
						onChange={this.handleNameChange}
						value={this.state.name}
					/>
				</Form.Group>
				<Form.Group controlId='newUserEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						onChange={this.handleEmailChange}
						value={this.state.email}
					/>
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>
				<Form.Group controlId='newUserPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						onChange={this.handlePasswordChange}
						value={this.state.password}
					/>
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		);
	}
}
