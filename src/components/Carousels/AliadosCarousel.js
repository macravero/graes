import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from './aliados.module.scss'
import SlideOne from '../../images/carrusel-valencia.jpg'
import SlideTwo from '../../images/carrusel-alicante.jpg'
import SlideThree from '../../images/carrusel-castellon.jpg'
export default () => (
  <Carousel autoPlay showThumbs={false} showStatus={false} interval={4000} infiniteLoop>
    <div className={styles.aliadosSlide}>
      <img alt="" src={SlideOne} />
      <img alt="" src={SlideOne} />
    </div>
    <div>
      <img alt="" src={SlideTwo} />
      <img alt="" src={SlideOne} />
    </div>
    <div>
      <img alt="" src={SlideThree} />
      <img alt="" src={SlideOne} />
    </div>
  </Carousel>
);
