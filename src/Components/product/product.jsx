import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../product/ProductCard"
import classes from "../product/product.module.css";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <section className={classes.product__Container}>
      {products.map((singleProduct) => (
        <ProductCard
          product={singleProduct}
          key={singleProduct.id}
          renderAddToCart={true}
        />
      ))}
    </section>
  );
}

export default Product;
