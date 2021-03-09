import { Form, Button } from 'react-bootstrap';
import { signupUser } from '../Utils/api-utils.js';
import { setLocalStorage } from '../Utils/local-storage-utils.js';


import React, { Component } from 'react'

export default class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  }
  handleNameChange = (e) => {
    this.setState({name:e.target.value})
  }
  handleEmailChange = (e) => {
    this.setState({email:e.target.value})
  }
  handlePasswordChange = (e) => {
    this.setState({password:e.target.value})
  }
  handleSubmit = async (e) => {
    e.preventDefault()
    const user = await signupUser(this.state.name, this.state.email, this.state.password)
    setLocalStorage(user)
    this.props.handleNewUser()
    this.props.props.history.push('/skyview')
  }

    render() {
      console.log(this.state);
        return (
            <Form onSubmit={this.handleSubmit}>
              Sign Up
              <Form.Group controlId="formBasicName">
                 <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="Enter name" onChange={this.handleNameChange} value={this.state.name} />
                </Form.Group>

              <Form.Group controlId="formBasicEmail">
                 <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmailChange} value={this.state.email} />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
            </Form>
        )
    }
}
