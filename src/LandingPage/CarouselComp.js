import React, { Component } from 'react';
import { getApod } from '../Utils/api-utils';
import './LandingPage.css';
import ImageGallery from 'react-image-gallery';
import Spinner from 'react-bootstrap/Spinner';

export default class CarouselComp extends Component {
    state = {
        data:[],
        loading: false
    }
    componentDidMount = async() =>{
      this.setState({loading:true});
       const data = await getApod();
              
       this.setState({ 
         loading:false,
         data:data
        })
       console.log(this.state.data)
    }
    getURlFromData=(array)=>{
      return array.map(item=>{
        return {
          original: item.url,
          description:item.copyright,
          originalTitle:item.explanation,
          thumbnail: item.url,
        }
      })
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
            <ImageGallery items={this.getURlFromData(this.state.data)} className="apod-image" /> }
          </div>
        )
    }
}
