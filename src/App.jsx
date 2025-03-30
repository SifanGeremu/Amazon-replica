import { useState } from "react";

import "./App.css";
// import Header from "./Components/Header/Header";
// import CarouselEffect from "./Components/Carousel/CarouselEffect";
// import Category from "./Components/category/category";
// import Product from "./Components/product/product";
import Routing from "./Pages/Router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routing/>
      {/* <Header/>
      <CarouselEffect/>
      <Category/>
      <Product/> */}
    </>
  );
}

export default App;
