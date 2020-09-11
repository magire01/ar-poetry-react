import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'



const Slider = () => {

  const sliderStyle = {
    height: 700,
    width: "auto",
    backgroundColor: "lightblue"
  }

  return (
    <Carousel infiniteLoop autoPlay="true" interval="5000">
        <div style={sliderStyle}> 
          <p>Buy the book on Amazon</p>

        </div>
        <div style={sliderStyle}> 
          <p>Recent Poems</p>
  
        </div>
        <div style={sliderStyle}> 
          <p>Recent Movies </p>
          
        </div>
    </Carousel>
  )
}

export default Slider;