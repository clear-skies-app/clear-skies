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

export default class App extends Component {
  state={
    name:getNameFromLocalStorage(),
    token:getTokenFromLocalStorage()
  }
    render() {
        return (
            <div>
                <Router>
                  <Header/>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <LandingPage {...routerProps} />} 
                        />
                        <PrivateRoute
                            path="/skyview" 
                            exact
                            render={(routerProps) => <SkyPage {...routerProps} />} 
                        />
                        <PrivateRoute
                            path="/observations/:id" 
                            exact
                            render={(routerProps) => <ObservationPage {...routerProps} />} 
                        />
                        <PrivateRoute
                          path="/catalog" 
                          exact
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