import React, { Component } from 'react';
import ObservationItem from './ObservationItem.js';
import { getLookUp } from '../Utils/api-utils';
import './ObservationPage.css';
import { getObjArray } from '../Utils/local-storage-utils.js';
import Spinner from 'react-bootstrap/Spinner';

export default class ObservationPage extends Component {
	state = {
		loading: true,
		observationList: [],
		observationObjectList: [],
		observationImageList: [],
	};
	componentDidMount = async () => {
		await this.fetchObservationList();
	};
	fetchObservationList = async () => {
		const observationList = getObjArray();
		// nice use of the key/value redundancy trick
		await this.setState({ observationList });
		await this.fetchLookUpData();
	};
	fetchLookUpData = async () => {
		await this.setState({ loading: true });
		// unless we're _reassigning_ the variable, const works and lets you mutate the array
		const lookUpArray = this.state.observationList.map((observation) =>
			getLookUp(observation, this.props.token)
		);
		console.log(lookUpArray);
		Promise.all(lookUpArray).then((values) => {
			this.setState({ 
				observationObjectList: values, 
				loading: false,
			});
		});
	};
	render() {
		return (
			<div className='container'>
				{this.state.loading ? (
					<div className='spinner'>
						<Spinner animation='grow' size='sm' variant='primary' />
						<Spinner animation='grow' variant='primary' />
						<Spinner animation='grow' size='sm' variant='primary' />
						<Spinner animation='grow' variant='primary' />
						<Spinner animation='grow' size='sm' variant='primary' />
					</div>
				) : (
					<div className='observation-list'>
						{this.state.observationObjectList.map(
							(observationObject, i) => (
								<ObservationItem
									key={`${i}${observationObject.name}`}
									updateObservations={
										this.fetchObservationList
									}
									image={observationObject.image}
									props={this.props}
									// {...props} is a more common way to pass all props down to child components
									name={observationObject.name}
									// nice fallbackin'!
									ra={observationObject.ra || 'N/A'}
									dec={observationObject.dec || 'N/A'}
								/>
							)
						)}
					</div>
				)}
			</div>
		);
	}
}
