import React, { Component } from 'react'
import OrbitBody from './OrbitBody.js'

export default class Orbit extends Component {
    state = {
        animate: true
    }

    render() {
        return (
            <div className={`orbit ${this.props.orbitClass}`} onMouseExit={this.handleHideInfo}>
                <OrbitBody bodyClass ={this.props.bodyClass} handleShowInfo={this.props.handleShowInfo} handleHideInfo={this.props.handleHideInfo} name={this.props.name} text={this.props.text}/>
            </div>
        )
    }
}