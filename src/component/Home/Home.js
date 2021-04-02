import React from 'react';
import androids from '../../fakeData/Android';
import cameras from '../../fakeData/Camera';
import laptops from '../../fakeData/laptop';
import CarouselComponent from '../Carousel/CarouselComponent';
import Product from '../Product/Product';
import './Home.css';

const Home = () => {
  const exactItem = (array, item) => {
    const randomNum = Math.floor(Math.random() * (array.length - item));
    let items = array.slice(randomNum, randomNum + item);
    return items;
  };

  const androids2 = exactItem(androids, 2);
  const cameras3 = exactItem(cameras, 3);
  const laptop1 = exactItem(laptops, 1);

  // const dataTen = fakeData.slice(0);
  // console.log(data);
  return (
    <div className="home">
      <CarouselComponent />
      <div className="home__container">
        <div className="home__row">
          {androids2.map((item) => (
            <Product item={item} key={item.key} />
          ))}
        </div>
        <div className="home__row">
          {cameras3.map((item) => (
            <Product item={item} key={item.key} />
          ))}
        </div>
        <div className="home__row">
          {laptop1.map((item) => (
            <Product item={item} key={item.key} />
          ))}
        </div>
      </div>
      {/* TODO: CARD SECTION */}
    </div>
  );
};

export default Home;

// NOTE: IMAGW SOUSE CODE
// https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
