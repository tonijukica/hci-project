import React from "react";
import styles from "./styles.module.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class LazyLoad extends React.Component {
    render() {
      const settings = {
        dots: true,
        lazyLoad: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,

      };
      return (
        <div className={styles.Showcase}>  
          <Slider {...settings}>
            <div>
              <img src='https://news.bitzamp.com/wp-content/uploads/2017/11/Cryptocurrencies-1.jpg' alt='' />
            </div>
            <div>
              <img src='https://ripplecoinnews.com/wp-content/uploads/2018/07/Cryptocurrency-market-moon.jpg' alt='' />
            </div>
            <div>
              <img src='https://www.incimages.com/uploaded_files/image/970x450/getty_876941262_2000150020009280128_341984.jpg' alt='' />
            </div>
          </Slider>
        </div>
      );
    }
  }

  /* <div>
              <img src='https://nulltx.com/wp-content/uploads/2017/02/shutterstock_361395185.jpg'/>
            </div>*/