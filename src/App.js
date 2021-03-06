import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header.js';
import LandingPage from './LandingPage/LandingPage.js';
import SkyPage from './SkyPage/SkyPage.js';
import ObservationPage from './ObservationPage/ObservationPage.js';
import CatalogPage from './CatalogPage/CatalogPage.js';
import DetailPage from './DetailPage/DetailPage.js';
import AboutDevs from './AboutDevs/AboutDevs.js';
import PrivateRoute from './Components/PrivateRoute.js';
import { withCookies } from 'react-cookie';
import {
	getNameFromLocalStorage,
	getTokenFromLocalStorage,
} from './Utils/local-storage-utils.js';
import './App.css';

class App extends Component {
	state = {
		name: getNameFromLocalStorage(),
		token: getTokenFromLocalStorage(),
	};
	handleNewUser = () => {
		this.setState({
			name: getNameFromLocalStorage(),
			token: getTokenFromLocalStorage(),
		});
	};
	handleLogout = () => {
		localStorage.clear();
		this.handleNewUser();
	};
	render() {
		return (
			<div className='app'>
				<Router>
					<Header
						handleLogout={this.handleLogout}
						name={this.state.name}
					/>
					<Switch>
						<Route
							path='/'
							exact
							render={(routerProps) => (
								<LandingPage
									cookies={this.props.cookies}
									handleNewUser={this.handleNewUser}
									{...routerProps}
								/>
							)}
						/>
						<PrivateRoute
							path='/skyview'
							exact
							token={this.state.token}
							render={(routerProps) => (
								<SkyPage
									name={this.state.name}
									cookies={this.props.cookies}
									{...routerProps}
								/>
							)}
						/>
						<PrivateRoute
							path='/observations'
							exact
							token={this.state.token}
							render={(routerProps) => (
								<ObservationPage {...routerProps} />
							)}
						/>
						<PrivateRoute
							path='/catalog'
							exact
							token={this.state.token}
							render={(routerProps) => (
								<CatalogPage {...routerProps} />
							)}
						/>
						<PrivateRoute
							path='/details/:name'
							exact
							token={this.state.token}
							render={(routerProps) => (
								<DetailPage {...routerProps} />
							)}
						/>
						<Route
							path='/about'
							exact
							render={(routerProps) => (
								<AboutDevs {...routerProps} />
							)}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default withCookies(App);
