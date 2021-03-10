import React, { Component } from 'react'
import './AboutDevs.css'
import AboutInfo from './AboutInfo'
import Orbit from './Orbit.js'

export default class AboutDevs extends Component {
    state = {
        name: 'Click',
        text: 'to view bio'
    }

    handleShowInfo = (name, text) => {
        this.setState({name, text})
    }

    render() {
        return (
            <section className='about-container'>
                <p className = 'about-intro'>Meet the developers behind Clear Skies, your personal star gazing app</p>
                <div className ='orbit-container'>
                    <AboutInfo text={this.state.text} name={this.state.name}/>
                    <Orbit orbitClass='cam-orbit' bodyClass='cam-body' handleShowInfo={this.handleShowInfo} handleHideInfo={this.handleHideInfo} text='lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem' name='Cameron'/>

                    <Orbit orbitClass='lori-orbit' bodyClass='lori-body' handleShowInfo={this.handleShowInfo} handleHideInfo={this.handleHideInfo} text='lorem ipsum' name='Lori'/>

                    <Orbit orbitClass='juli-orbit' bodyClass='juli-body' handleShowInfo={this.handleShowInfo} handleHideInfo={this.handleHideInfo} text='lorem ipsum' name='Juli'/> 

                    <Orbit orbitClass='jake-orbit' bodyClass='jake-body' handleShowInfo={this.handleShowInfo} handleHideInfo={this.handleHideInfo} text='lorem ipsum' name='Jake'/>
                </div>
            </section>
        )
    }
}