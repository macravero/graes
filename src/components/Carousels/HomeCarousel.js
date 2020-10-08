import React from "react";
import ReactPlayer from 'react-player'
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
    <ReactPlayer width="100%" url="https://www.youtube.com/embed/XKYXfgXSS-A" height="auto" className='reactPlayer'/>
    {/* <div>
    <iframe src="https://www.youtube.com/embed/XKYXfgXSS-A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div> */}
  </Carousel>
);
