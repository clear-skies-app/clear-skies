import React, { Component } from 'react'
import { getLookUp } from '../Utils/api-utils'
import {Card, Button} from 'react-bootstrap'

export default class DetailPage extends Component {
    state={
        objectDetails:{}
    };
    componentDidMount=async()=>{
        const data = await getLookUp(`${this.props.match.params.name}`, this.props.token)
        this.setState({objectDetails:data})
    }
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.objectDetails.image} />
                <Card.Body>
                    <Card.Title>{this.state.objectDetails.name}</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}
