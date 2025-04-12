import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing/Landing";
import Auth from "./Auth/Auth";
import Cart from "./Cart/cart";
import Orders from "./orders/Orders";
import Payement from "./Payement/Payement";
import Results from "./Results/Results";
import ProductDetail from "./ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51RBVBiDIyZBYcsP1lvZ1Nh6GWCZ3bWb749JQDDNyNqZ54tbTmJH0iI0Ee1HXJ7HP9oariEgykPLZ8zTOCPL8tGJR008E76aA6u"
);

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/cart" element={<Cart />} />

      <Route
        path="/orders"
        element={
          <ProtectedRoute msg="You must login first to view orders">
            <Orders />
          </ProtectedRoute>
        }
      />

      <Route
        path="/payement"
        element={
          <ProtectedRoute msg="You must login first to pay">
            <Elements stripe={stripePromise}>
              <Payement />
            </Elements>
          </ProtectedRoute>
        }
      />

      <Route path="/category/:categoryName" element={<Results />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
    </Routes>
  );
}

export default Routing;
