import React, { Component } from 'react'
import SignUp from '../AuthPages/SignUp.js'
import Login from '../AuthPages/Login.js'

export default class LandingPage extends Component {
    render() {
        return (
            <main>
               <SignUp props={this.props} handleNewUser={this.props.handleNewUser}/>
               <Login props={this.props} handleNewUser={this.props.handleNewUser}/>
            </main>
        )
    }
}
