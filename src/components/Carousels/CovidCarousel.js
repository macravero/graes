import React from "react";
import { Carousel } from "react-responsive-carousel";
import SlideOne from '../../images/carrusel-valencia.jpg'
import SlideTwo from '../../images/carrusel-alicante.jpg'
import SlideThree from '../../images/carrusel-castellon.jpg'
export default () => (
  <Carousel autoPlay showThumbs={false} showStatus={false} interval={4000} infiniteLoop className="covid-carousel">
    <div>
      <img alt="" src={SlideOne} />
    </div>
    <div>
      <img alt="" src={SlideTwo} />
    </div>
    <div>
      <img alt="" src={SlideThree} />
    </div>
  </Carousel>
);
