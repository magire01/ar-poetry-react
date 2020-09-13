import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import "./slider.css"

import BookItem from "./SliderItems/BookItem"
import FeaturedPoems from "./SliderItems/FeaturedPoems"
import FeaturedReviews from "./SliderItems/FeaturedReviews"



const Slider = () => {

  const sliderStyle = {
    height: 250,
    width: "auto",
  }

  

  return (
    <div className="carousel-outer">
      <Carousel infiniteLoop autoPlay="true" interval="5000" showStatus="false" swipeable="true" style={{ background: "none" }}>
          <div style={sliderStyle}> 
            <BookItem />

          </div>
          <div style={sliderStyle}> 
            <FeaturedPoems />
    
          </div>
          <div style={sliderStyle}> 
            <FeaturedReviews />
            
          </div>
      </Carousel>
    </div>
  )
}

export default Slider;