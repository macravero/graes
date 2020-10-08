import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from './aliados.module.scss'
import SlideOne from '../../images/aliados/aliados1.png'
import SlideTwo from '../../images/aliados/aliados2.png'
import SlideThree from '../../images/aliados/aliados3.png'
import SlideFour from '../../images/aliados/aliados4.png'
import SlideFive from '../../images/aliados/aliados5.png'
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
    <div>
      <img alt="" src={SlideFive} />
    </div>
  </Carousel>
);
