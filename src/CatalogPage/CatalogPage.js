import React, { Component } from 'react'
import { getObservations } from '../Utils/api-utils'
import CatalogItem from './CatalogItem.js'

export default class CatalogPage extends Component {
    state={
        observedCatalog:[]
    }
    componentDidMount= async()=>{
        const observedObjects = await getObservations(this.props.token);

        this.setState({observedCatalog:observedObjects});
    }
    render() {
        return (
            <div>
                {this.state.observedCatalog.map(observationObject => <CatalogItem image={observationObject.image} props={this.props} name={observationObject.name}/> )}
            </div>
        )
    }
}
