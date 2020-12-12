import React from 'react';
import Slider from "react-slick";
import axios from "axios";
import $ from 'jquery';
import { render } from '@testing-library/react';
import { Component } from 'react';


export default class Vijesti extends Component {
  render(){
    const settings = {
      arrows: true,
      infinite:true,
      slidesToShow:3,
      slidesToScroll:1
    }

    let vijesti = document.getElementsByClassName("vijesti-slider");
  
    let loadSlider = async res => {
      let response = await axios.get('http://localhost:8000/vijesti');
      let data = await response.data;
      console.log(data);
      return(
        <div>
          {data.map(item => {
            return(
              <div key={item.id}>
                <img>{data.img}</img>
                <h3>{data.title}</h3>
                <p>{data.content}</p>
              </div>
            )
          })}
        </div>
      );      
    }
    
    vijesti.innerHTML = loadSlider();

    

    return (
        <div>
          <Slider {...settings} className="vijesti-slider">
          
          </Slider>
        </div>
      )

  };
}