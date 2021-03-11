import React, { Component } from 'react';
import { getApod } from '../Utils/api-utils';
import './LandingPage.css';
import ImageGallery from 'react-image-gallery';

export default class CarouselComp extends Component {
    state = {
        data:[]
    }
    componentDidMount = async() =>{
       const data = await getApod();
              
       this.setState({data:data})
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
          <div className="container">
            <ImageGallery items={this.getURlFromData(this.state.data)} className="apod-image" />
          </div>
        )
    }
}
