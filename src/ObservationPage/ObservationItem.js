import React, { Component } from 'react'
import {Card, Button, Form, FormControl} from 'react-bootstrap'

export default class ObservationItem extends Component {
    state = {
        observation: ''
    }
    handleFormSubmit = (e) => {
        //post request goes here
    }
    handleObservationChange = (e) => {
        this.setState({observation: e.target.value})
    }
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>
                        {
                            `RA: ${this.props.ra}`
                        }
                    </Card.Text>
                    <Card.Text>
                        {
                            `dec: ${this.props.dec}`
                        }
                    </Card.Text>
                    <Form onSubmit={this.handleFormSubmit}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Observation Notes</Form.Label>
                            <FormControl as="textarea" aria-label="With textarea" onChange={this.handleObservationChange}/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Complete Observation
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}
