import React from "react";
import { Carousel } from "react-responsive-carousel";
import SlideOne from '../../images/slide-01.jpg'
import SlideTwo from '../../images/slide-02.jpg'


export default () => (
  <Carousel showThumbs={false} showStatus={false} interval={4000} infiniteLoop dynamicHeight={true}>
    <div>
      <img alt="" src={SlideOne} />
    </div>
    <div>
      <img alt="" src={SlideTwo} />
    </div>
  </Carousel>
);
