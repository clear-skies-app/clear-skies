import React, { Component } from 'react'
import {Card, Button, Form, FormControl} from 'react-bootstrap'
import { addObservation } from '../Utils/api-utils.js'

export default class ObservationItem extends Component {
    state = {
        notes: ''
    }
    handleFormSubmit = async (e) => {
        e.preventDefault();
        const observationObject = {
            name: this.props.name,
            image: this.props.image, 
            notes: this.state.notes,
        }
        await addObservation(this.props.props.token, observationObject)
    }
    handleObservationChange = (e) => {
        this.setState({notes: e.target.value})
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
