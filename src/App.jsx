import { useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import CarouselEffect from "./Components/Carousel/CarouselEffect";
import Category from "./Components/category/category";
import Product from "./Components/product/product";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <CarouselEffect/>
      <Category/>
      <Product/>
    </>
  );
}

export default App;
