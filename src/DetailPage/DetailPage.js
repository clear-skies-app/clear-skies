import React, { Component } from 'react'
import { getLookUp, updateObservation, getObservations, deleteObservation } from '../Utils/api-utils'
import {Card, Button, Alert, Form} from 'react-bootstrap'

export default class DetailPage extends Component {
    state={
        observation: {},
        notes: '',
        objectDetails:{},
        showEdit: false,
    };
    componentDidMount=async()=>{
       await this.fetchLookUp()
       await this.fetchObservations()
       this.setState({notes: this.state.observation.notes})
    }
    fetchObservations = async () => {
        const observedObjects = await getObservations(this.props.token);
        const observation = observedObjects.find(item => item.name === this.state.objectDetails.name)
        this.setState({observation});
    }
    fetchLookUp = async () => {
        const data = await getLookUp(`${this.props.match.params.name}`, this.props.token)
        this.setState({objectDetails:data})
    }
    handleDeleteObservation = async () => {
        await deleteObservation(this.props.token, this.state.objectDetails.name)
        this.props.history.push('/catalog')
    }
    handleNotesChange = (e) => {
        this.setState({notes: e.target.value})
    }
    handleShowEdit = () => {
        this.setState({showEdit: !this.state.showEdit})
    }
    handleSubmitNotes = async (e) => {
        e.preventDefault()
        await updateObservation(this.props.token, this.state.objectDetails.name, this.state.notes)
    }
    render() {
        return (
            <Card style={{ width: '40rem' }}>
                <Card.Img variant="top" src={this.state.objectDetails.image} />
                <Card.Body>
                    <Card.Title>{this.state.objectDetails.name}</Card.Title>
                    <Card.Text>
                        {`Category: ${this.state.objectDetails.category}`}
                    </Card.Text>
                    <Card.Text>
                        {`Reference: ${this.state.objectDetails.referenceLink}`}
                    </Card.Text>
                    <Card.Text>
                        {`RA: ${this.state.objectDetails.ra ? this.state.objectDetails.ra : 'N/A'}`}
                    </Card.Text>
                    <Card.Text>
                        {`dec: ${this.state.objectDetails.dec ? this.state.objectDetails.dec : 'N/A'}`}
                    </Card.Text>
                    <Card.Text>
                        {`Galactic Coordinates: ${this.state.objectDetails.galacticCoords ? this.state.objectDetails.galacticCoords : 'N/A'}`}
                    </Card.Text>
                    { this.state.showEdit ? <Alert dismissible onClose={this.handleShowEdit}>
                        <Alert.Heading>Edit notes</Alert.Heading>
                        <Form onSubmit={this.handleSubmitNotes}>
                            <Form.Group>
                                <Form.Label srOnly>
                                    Edit notes field
                                </Form.Label>
                                <Form.Control onChange={this.handleNotesChange} as="textarea" aria-label="With textarea" value={this.state.notes}/>
                            </Form.Group>
                            <Button type='submit'>Submit Notes</Button>
                        </Form>                        
                    </Alert> : <Button variant="primary" onClick={this.handleShowEdit}>Edit notes</Button>}

                    <Button onClick={this.handleDeleteObservation} variant="primary">Delete Observation</Button>
                </Card.Body>
            </Card>
        )
    }
}
