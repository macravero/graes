import React from "react";
import { Carousel } from "react-responsive-carousel";
import SlideOne from '../../images/slide-01.jpg'
import SlideTwo from '../../images/slide-02.jpg'
import SlideThree from '../../images/slide-03.mp4'
export default () => (
  <Carousel showThumbs={false} showStatus={false} interval={4000} infiniteLoop>
    <div>
      <img alt="" src={SlideOne} />
    </div>
    <div>
      <img alt="" src={SlideTwo} />
    </div>
    <div>
      <video src={SlideThree} width='100%' height='100%'></video>
    </div>
  </Carousel>
);
