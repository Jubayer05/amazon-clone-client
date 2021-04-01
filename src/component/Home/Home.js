import React from 'react';
import CarouselComponent from '../Carousel/CarouselComponent';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <CarouselComponent />
      </div>

      <div className="home__row">
        {/* Product */}
        <Product />
        {/* Product */}
      </div>
      <div className="home__row">
        {/* Product */}
        {/* Product */}
        {/* Product */}
      </div>
      <div className="home__row">
        {/* Product */}
        {/* Product */}
      </div>
      {/* TODO: CARD SECTION */}
    </div>
  );
};

export default Home;

// NOTE: IMAGW SOUSE CODE
// https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
