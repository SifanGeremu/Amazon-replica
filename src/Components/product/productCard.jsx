import React from "react";
import Rating from "@mui/material/Rating";
import numeral from "numeral";
import classes from "../product/product.module.css";
import CurrencyFormat from "../currency/CurrencyFormat";
import { Link } from "react-router-dom";

function ProductCard({ product, flex, renderDescription }) {
  const { image, title, id, rating, price, description } = product;

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.product__flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          {renderDescription && description && <div>{description}</div>}
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
      </Link>
    </div>
  );
}
export default ProductCard