import React from "react";
import { Carousel } from "react-responsive-carousel";
import SlideOne from '../../images/slide-01.jpg'
import SlideTwo from '../../images/slide-02.jpg'
import SlideThree from '../../images/slide-03.jpg'
import SlideFour from '../../images/slide-04.jpg'
export default () => (
  <Carousel autoPlay showThumbs={false} showStatus={false} interval={4000} infiniteLoop>
    <div>
      <img alt="" src={SlideOne} />
    </div>
    <div>
      <img alt="" src={SlideTwo} />
    </div>
    <div>
      <img alt="" src={SlideThree} />
    </div>
    <div>
      <img alt="" src={SlideFour} />
    </div>
  </Carousel>
);
