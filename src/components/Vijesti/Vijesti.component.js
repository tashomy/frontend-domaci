import React, {Component, useState} from 'react';
import Slider from 'react-slick';

const Vijesti = (props) => {
  const settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  //const [loader, setLoader] = useState(false);

  console.log(props);
  console.log(typeof(props))

  let vijesti = Object.values(props);
  console.log(vijesti);
  return (
    <div>
      
      <Slider {...settings} className="vijesti-slider">
        {vijesti.map((item, index) => {
          //debugger;
          return (
            <div key={index}>
              {console.log(item.id)}
              <img>{item.img}</img>
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Vijesti;