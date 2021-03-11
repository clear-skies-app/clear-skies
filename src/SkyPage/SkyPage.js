import React, { Component } from 'react';
import { Alert, Row, Col, Container } from 'react-bootstrap';
import {
	getObjArray,
	addObjNameToLSArray,
	setObjArrayLocalStorage,
	getCoordsFromLocalStorage,
} from '../Utils/local-storage-utils.js';
import VirtualSky from './VirtualSky.js';
import LocationPrompt from './LocationPrompt.js';
import SideBar from './SideBar.js';
import TipsAlert from './TipsModal.js';
export default class SkyPage extends Component {
	state = {
		objArray: [],
		objName: '',
		coords: getCoordsFromLocalStorage(),
		showModal: true,
	};

	componentDidMount = async () => {
		let objArray = [];
		objArray = getObjArray() || [];
		setObjArrayLocalStorage(objArray);
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

	handleStartObserve = () => {
		setObjArrayLocalStorage(this.state.objArray);
		this.props.history.push('/observations');
	};

	handleModalToggle = () => {
		this.setState({ showModal: !this.state.showModal });
	};

	render() {
		const { cookies, name, token } = this.props;
		const { objArray, objName, coords, showModal } = this.state;

		return (
			<Container fluid className='skyViewPage'>
				{!cookies.get('city') ? (
					<>
						<Row className='locationInput'>
							<LocationPrompt
								cookies={cookies}
								token={token}
								name={name}
							/>
						</Row>
					</>
				) : (
					<>
						<Row>
							<Col md={4} className='sideBar'>
								<SideBar
									handleObserveSubmit={
										this.handleObserveSubmit
									}
									objName={objName}
									handleObjName={this.handleObjName}
									objArray={objArray}
									handleStartObserve={this.handleStartObserve}
								/>
								<TipsAlert
									handleModalToggle={this.handleModalToggle}
									showModal={showModal}
									onClick={() =>
										this.setState({ showModal: true })
									}
								/>
							</Col>
							<Col md={8} className='virtualSky'>
								<Alert variant='dark'>
									Current view from above{' '}
									{cookies.get('city')}
								</Alert>
								<VirtualSky coords={coords} />
							</Col>
						</Row>
					</>
				)}
			</Container>
		);
	}
}
