import React from 'react'
import Carousel from '../../Components/Carousel/CarouselEffect'
import Category from "../../Components/category/Category"
import Product from "../../Components/product/product"
import LayOut  from '../../Components/LayOut/LayOut'

function Landing() {
  return (
    <LayOut>
     
      <Carousel />
      <Category />
      <Product/>
    </LayOut>
  );
}

export default Landing