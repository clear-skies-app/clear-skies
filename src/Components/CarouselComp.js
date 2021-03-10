import React, { Component } from 'react'
import { getApod } from '../Utils/api-utils'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';
// import '../App.css'
// SwiperCore.use([Navigation, Pagination, Scrollbar,A11y]);
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
          originalTitle:item.explanation
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
          

