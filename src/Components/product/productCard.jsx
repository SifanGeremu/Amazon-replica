import React from "react";
import Rating from "@mui/material/Rating";
import numeral from "numeral";
import classes from "../product/product.module.css"
import CurrencyFormat from "../currency/CurrencyFormat";

function ProductCard({ product }) {
  const { image, title, id, rating, price } = product;

  return (
    <div className={classes.card__container}>
      <a href="#">
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
        </div>
        <div className={classes.rating}>
          {rating && (
            <>
              <Rating value={rating.rate} precision={0.1} readOnly />
              <small>({rating.count} reviews)</small>
            </>
          )}
        </div>
        <div>
          <CurrencyFormat amount={price} />
        </div>
        <button className={classes.button}>Add to Cart</button>
      </a>
    </div>
  );
}

export default ProductCard;
