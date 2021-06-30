import React, { Component } from 'react'
import { getObservations } from '../Utils/api-utils'
import CatalogItem from './CatalogItem.js'

export default class CatalogPage extends Component {
    state={
        observedCatalog:[]
    }
    componentDidMount= async()=>{
        const observedCatalog = await getObservations(this.props.token);

        this.setState({ observedCatalog });
    }
    render() {
        return (
            <div>
                {this.state.observedCatalog.map(observationObject => 
                    <CatalogItem 
                        image={observationObject.image} 
                        props={this.props} 
                        // {...props} is more conventional here to pass all props
                        name={observationObject.name}/> )}
            </div>
        )
    }
}
