import React, { Component } from 'react'

export default class AboutInfo extends Component {
    render() {
        return (
            <div className='about-info'>
                <div className='about-info-text'>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}
