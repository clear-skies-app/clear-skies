import React, { Component } from 'react';
import { Alert, Button, Form, ListGroup } from 'react-bootstrap';

export default class SideBar extends Component {
	render() {
		const {
			handleObserveSubmit,
			// not sure I would this objName stuff if I were maintaining this codebase. Is there a clearer name?
			objName,
			handleObjName,
			objArray,
			handleStartObserve,
		} = this.props;

		return (
			<>
				<Alert variant='dark'>
					<Alert.Heading>Getting Started</Alert.Heading>
					<p>
						Explore the virtual sky and once you've decided on some
						objects to observe outside, just enter them in the text
						box below and press 'Add' to include them in your
						observation session. When you're ready, click 'Start
						Observation' to enter your observation session and add
						personal observation notes.
					</p>
					<hr />
					<p>Happy Exploring!</p>
				</Alert>
				<Form variant='dark' inline onSubmit={handleObserveSubmit}>
					<Form.Group controlId='observeInput'>
						<Form.Label srOnly>Enter object name here</Form.Label>
						<Form.Control
							type='text'
							placeholder='Enter object name here'
							value={objName}
							onChange={handleObjName}
						/>
						<Button type='submit'>Add</Button>
					</Form.Group>
				</Form>
				<ListGroup>
					{objArray.map((item, i) => (
						// this i isn't doing anything without the ${}
						<ListGroup.Item key={`${item} + ${i}`}> 
							{item}
						</ListGroup.Item>
					))}
				</ListGroup>
				<Button onClick={handleStartObserve}>Start Observation</Button>
			</>
		);
	}
}
