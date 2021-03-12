import React, { Component } from 'react'
import ObservationItem from './ObservationItem.js'
import { getLookUp } from '../Utils/api-utils'
import './ObservationPage.css'
import { getObjArray } from '../Utils/local-storage-utils.js'
import Spinner from 'react-bootstrap/Spinner';

export default class ObservationPage extends Component {
    state = {
        loading:true,
        observationList: [], 
        observationObjectList: []
    }
    componentDidMount = async () => {
        // await this.setState({loading: true});
        const observationList = getObjArray()
        await this.setState({observationList})
        await this.fetchLookUpData()
        // await this.setState({loading: false});
    }

    fetchLookUpData = async () => {
        await this.setState({loading: true});
        let lookUpArray = this.state.observationList.map(observation => getLookUp(observation, this.props.token))
        console.log(lookUpArray)
        Promise.all(lookUpArray).then((values) => {
            this.setState({observationObjectList: values, loading:false})
        })
        // let lookUpArray = [];
        // for (const name of this.state.observationList) {
        //     const observationObject = await getLookUp(name, this.props.token)
        //     lookUpArray.push(observationObject)
        // }
        // this.setState({observationObjectList: lookUpArray})
    }
    render() {
        return (
            <div className="container"> { 
                this.state.loading ? 
                <div className='spinner'>
                 <Spinner animation="grow" size="sm" variant="primary" /> 
                 <Spinner animation="grow" variant="primary" /> 
                 <Spinner animation="grow" size="sm" variant="primary" /> 
                 <Spinner animation="grow" variant="primary" /> 
                 <Spinner animation="grow" size="sm" variant="primary" /> 
                </div> :  
                <div className = 'observation-list'>
                {this.state.observationObjectList.map(observationObject => <ObservationItem image={observationObject.image} props={this.props} name={observationObject.name} ra={observationObject.ra || 'N/A'} dec={observationObject.dec || 'N/A'}/>)}
                </div>}
            </div>
           
        )
    }
}
