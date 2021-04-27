import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../images/banner/banner1.jpg';
import banner2 from '../../images/banner/banner2.jpg';
import banner3 from '../../images/banner/banner3.jpg';
import banner4 from '../../images/banner/banner4.jpg';
import banner5 from '../../images/banner/banner5.jpg';
import './CarouselComponent.css';

const CarouselComponent = () => {
  return (
    <Carousel
      className="carousel"
      autoPlay
      dynamicHeight={false}
      infiniteLoop
      interval={4000}
      stopOnHover={false}
      showArrows={true}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
      <div>
        <img className="carousel__image" src={banner1} alt="" />
      </div>
      <div>
        <img className="carousel__image" src={banner2} alt="" />
      </div>
      <div>
        <img className="carousel__image" src={banner3} alt="" />
      </div>
      <div>
        <img className="carousel__image" src={banner4} alt="" />
      </div>
      <div>
        <img className="carousel__image" src={banner5} alt="" />
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
