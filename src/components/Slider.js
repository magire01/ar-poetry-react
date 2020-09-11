import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

import BookItem from "./SliderItems/BookItem"
import FeaturedPoems from "./SliderItems/FeaturedPoems"
import FeaturedReviews from "./SliderItems/FeaturedReviews"



const Slider = () => {

  const sliderStyle = {
    height: "auto",
    width: "auto",
    backgroundColor: "white"
  }

  return (
    <Carousel infiniteLoop autoPlay="true" interval="5000">
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
  )
}

export default Slider;