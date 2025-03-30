import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Auth from "./Auth/SignUp";
import Cart from "./Cart/cart";
import Orders from "./orders/Orders";
import Payement from "./Payement/Payement";
import Results from "./Results/Results";
import ProductDetail from "./ProductDetail/ProductDetail";
function Routing() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payement" element={<Payement />} />
          <Route path="/category/:categoryName" element={<Results />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Routing;
