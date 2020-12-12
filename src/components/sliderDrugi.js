import React from 'react';
import Slider from 'react-slick';
import Component from 'react';
import axios from 'axios';
import loadSlider from 'slick-carousel';
import $ from 'jquery';
import Page from '../pages/main-page';


class VijestiSlider extends Page {
    constructor(props) {
        super(props);
        this.state = { 
            slides: ""
         }
         this.onLoad = this.onLoad.bind(this);
    }

    componentDidMount(){
        let loadSlider = async res => {
            let response = await axios.get('http://localhost:8000/vijesti');
            let data = await response.data;
            return data;
            
          }
    }

    onLoadF(){
        const {slides} = this.state;
    }

    

    render() { 
        const settings = {
            arrows:true,
            infinite:true,
            slidesToShow: 3,
            slidesToScroll:1
        }

        window.onload = this.onLoadF();
        
        return ( 
            <>
                <Slider {...settings}>
                    <div className="sadrzaj"></div>
                </Slider>
            </> 
        );
    }
}
 
export default VijestiSlider;