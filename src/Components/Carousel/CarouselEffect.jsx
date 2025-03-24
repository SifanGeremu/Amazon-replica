import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../Carousel/carousel.module.css";

import { image } from "./img/data.js";

function CarouselEffect() {
  return (
    <>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={true}
        showThumbs={false}
      >
        {image.map((imageItemLink) => (
          <img src={imageItemLink} alt="" />
        ))}
      </Carousel>
      <div className={styles.hero__img}></div>
    </>
  );
}

export default CarouselEffect;
