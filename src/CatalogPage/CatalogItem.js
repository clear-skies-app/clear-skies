import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'

export default class CatalogItem extends Component {
    
    handleClick=()=>{
        this.props.props.history.push(`/details/${this.props.name}`)
    }
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.image} />
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                  <Button onClick={this.handleClick}>View Details</Button>
                </Card.Body>
            </Card>
        )
    }
}
