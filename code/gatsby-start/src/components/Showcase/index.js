import React from "react";
import styles from "./styles.module.css";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class LazyLoad extends React.Component {
    render() {
      const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,

      };
      return (
        <div className={styles.Showcase}>  
          <Slider {...settings} className = {styles.Slider}>
            <div className = {styles.image}>
              <img src='https://ethereumworldnews.com/wp-content/uploads/2017/06/Cryptocurrency.png' alt=''/>
            </div>
            <div className = {styles.image}>
              <img src='https://cdn-images-1.medium.com/max/1600/1*RZde6Zr-f7WKnrCYqaBm1g.jpeg' alt='' />
            </div>
            <div className = {styles.image}>
              <img src='http://www.adampolinak.com/wp-content/uploads/2018/08/cryptocurrency-l%C3%A0-g%C3%AC.jpg' alt='' />
            </div>
          </Slider>
        </div>
      );
    }
  }

  /* <div>
              <img src='https://nulltx.com/wp-content/uploads/2017/02/shutterstock_361395185.jpg'/>
            </div>*/