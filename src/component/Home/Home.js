import React from 'react';
import CarouselComponent from '../Carousel/CarouselComponent';
import androids from '../../fakeData/Android';
import cameras from '../../fakeData/Camera';
import laptops from '../../fakeData/laptop';
import Product from '../Product/Product';
import './Home.css';
import ProductOverflow from '../ProductOverflow/ProductOverflow';
import Footer from '../Footer/Footer';

const Home = () => {
  const androidsImg = androids.map((item) => item.img);
  const CameraImg = cameras.map((item) => item.img).slice(0, 13);
  const LaptopImg = laptops.map((item) => item.img).slice(0, 10);
  return (
    <div className="home">
      <CarouselComponent />
      <Product />
      <div className="productOverflow__home">
        <ProductOverflow
          productName="Androids & Accessories"
          images={androidsImg}
        />
        <ProductOverflow
          productName="Best Seller Camera & related products"
          images={CameraImg}
        />
        <ProductOverflow
          productName="Shop Laptops & Tablets"
          images={LaptopImg}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

// NOTE: IMAGW SOUSE CODE
// https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
