import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';
import Header from './Components/Header.js'
import LandingPage from './LandingPage/LandingPage.js'
import SkyPage from './SkyPage/SkyPage.js'
import ObservationPage from './ObservationPage/ObservationPage.js'
import CatalogPage from './CatalogPage/CatalogPage.js'
import AboutDevs from './AboutDevs/AboutDevs.js'
import PrivateRoute from './Components/PrivateRoute.js';
import { getNameFromLocalStorage, getTokenFromLocalStorage } from './Utils/local-storage-utils.js'
import './App.css';
import CarouselComp from './Components/CarouselComp.js';


export default class App extends Component {
  state={
    name:getNameFromLocalStorage(),
    token:getTokenFromLocalStorage()
  }
  handleNewUser = () => {
      this.setState({
        name:getNameFromLocalStorage(),
        token:getTokenFromLocalStorage()
      })
  }
  handleLogout = () => {
      localStorage.clear()
      this.handleNewUser()
  }
    render() {
        return (
            <div>
                <Router>
                  <Header handleLogout={this.handleLogout}/>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <LandingPage {...routerProps} handleNewUser={this.handleNewUser}/>} 
                        />
                        <Route 
                            path="/carousel" 
                            exact
                            render={(routerProps) => <CarouselComp {...routerProps}/>} 
                        />
                        <PrivateRoute
                            path="/skyview" 
                            exact
                            token={this.state.token}
                            render={(routerProps) => <SkyPage {...routerProps} />} 
                        />
                        <PrivateRoute
                            path="/observations" 
                            exact
                            token={this.state.token}
                            render={(routerProps) => <ObservationPage {...routerProps} />} 
                        />
                        <PrivateRoute
                          path="/catalog" 
                          exact
                          token={this.state.token}
                          render={(routerProps) => <CatalogPage {...routerProps} />} 
                        />
                        <Route 
                            path="/about" 
                            exact
                            render={(routerProps) => <AboutDevs {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}