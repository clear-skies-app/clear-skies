import React, { Component } from 'react';
import {
	Form,
	FormControl,
	FormLabel,
	FormGroup,
	Button,
	ListGroup,
	ListGroupItem,
} from 'react-bootstrap';
import {
	getObjArray,
	addObjNameToLSArray,
	setObjArrayLocalStorage,
} from '../Utils/local-storage-utils.js';
import { cityToCoords } from '../Utils/api-utils.js';

export default class SkyPage extends Component {
	state = {
		objArray: [],
		objName: '',
		city: '',
		coords: '',
	};

	componentDidMount = async () => {
		await this.fetchObjArray();
	};

	fetchObjArray = async () => {
		const objArray = await getObjArray();
		this.setState({ objArray });
	};

	handleObserveSubmit = async (e) => {
		e.preventDefault();

		await addObjNameToLSArray(this.state.objName);
		await this.fetchObjArray();
		this.setState({ objName: '' });
	};

	handleObjName = (e) => this.setState({ objName: e.target.value });

	handleLocationSubmit = async (e) => {
		e.preventDefault();

		const coords = await cityToCoords(this.state.city, this.props.token);
		await this.setState({ coords });
	};

	handleCityChange = (e) => this.setState({ city: e.target.value });

	handleStartObserve = () => {
		setObjArrayLocalStorage(this.state.objArray);
		this.props.history.push('/observations');
	};
	render() {
		const virtualSkyURL = `https://virtualsky.lco.global/embed/index.html?longitude=${this.state.coords.lon}&latitude=${this.state.coords.lat}&projection=polar`;

		return (
			<main className='skyViewPage'>
				{!this.state.coords && (
					<>
						<section className='locationInput'>
							<Form onSubmit={this.handleLocationSubmit}>
								<FormGroup controlId='locationInput'>
									<FormLabel>
										Enter your city to get started
									</FormLabel>
									<FormControl
										type='text'
										placeholder='Portland'
										value={this.state.city}
										onChange={this.handleCityChange}
									/>
								</FormGroup>
								<Button type='submit'>Go Explore!</Button>
							</Form>
						</section>
					</>
				)}
				{this.state.coords && (
					<>
						<section className='virtualSky'>
							<iframe
								title='virtualSky'
								width='500'
								height='350'
								frameBorder='0'
								scrolling='no'
								marginHeight='0'
								marginWidth='0'
								src={virtualSkyURL}
								allowtransparency='true'></iframe>
						</section>
						<section className='userObserveList'>
							<Form onSubmit={this.handleObserveSubmit}>
								<FormGroup controlId='observeInput'>
									<FormLabel>
										Choose an Object to Observe
									</FormLabel>
									<FormControl
										type='text'
										placeholder='...Jupiter'
										value={this.state.objName}
										onChange={this.handleObjName}
									/>
								</FormGroup>
							</Form>
							<ListGroup>
								{this.state.objArray.map((item, i) => (
									<ListGroupItem key={`${item} + i`}>
										{item}
									</ListGroupItem>
								))}
							</ListGroup>
							<Button onClick={this.handleStartObserve}>
								Start Observation
							</Button>
						</section>
					</>
				)}
			</main>
		);
	}
}
