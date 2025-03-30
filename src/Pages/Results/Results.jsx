import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../API/Endpoints";

import classes from "../../Pages/Results/Results.module.css";
import ProductCard from "../../Components/product/ProductCard";

const categoryMapping = {
  electronics: "electronics",
  fashion: "men's clothing",
  gaming: "electronics",
};

function Results() {
  const [results, setResult] = useState([]);
  const { categoryName } = useParams();

  const validCategory =
    categoryMapping[categoryName.toLowerCase()] || "electronics"; // Default category if invalid

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${validCategory}`)
      .then((res) => {
        console.log("API Response:", res.data);
        setResult(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setResult([]);
      });
  }, [categoryName]);

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>category/{validCategory}</p>
        <hr />
        <div className={classes.Products__container}>
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Results;
