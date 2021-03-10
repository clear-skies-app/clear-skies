import React, { Component } from 'react'
import ObservationItem from './ObservationItem.js'
import { getLookUp } from '../Utils/api-utils'
import './ObservationPage.css'

export default class ObservationPage extends Component {
    state = {
        observationList: ['mars', 'mirach', 'mirfak', 'jupiter', 'neptune'], // remove dummy data later
        observationObjectList: []
    }
    componentDidMount = async () => {
        //local storage util here to get observation list!
        await this.fetchLookUpData()
    }
    fetchLookUpData = async () => {
        let lookUpArray = [];
        for (const name of this.state.observationList) {
            const observationObject = await getLookUp(name, this.props.token)
            lookUpArray.push(observationObject)
        }
        this.setState({observationObjectList: lookUpArray})
    }
    render() {
        return (
            <div className = 'observation-list'>
                {this.state.observationObjectList.map(observationObject => <ObservationItem image={observationObject.image} name={observationObject.name} ra={observationObject.ra || 'N/A'} dec={observationObject.dec || 'N/A'}/>)}
            </div>
        )
    }
}
