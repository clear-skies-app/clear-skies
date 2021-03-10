import React, { Component } from 'react'

export default class OrbitBody extends Component {

    render() {
        return (
            <div className={`orbit-body ${this.props.bodyClass}`} onClick={() => this.props.handleShowInfo(this.props.name, this.props.text)}/>
        )
    }
}
