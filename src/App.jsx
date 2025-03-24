import { useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import CarouselEffect from "./Components/Carousel/CarouselEffect";
import Category from "./Components/category/category";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header/>
      <CarouselEffect/>
      <Category/>
    </>
  );
}

export default App;
