import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import numeral from "numeral";
import classes from "../product/product.module.css";
import CurrencyFormat from "../currency/CurrencyFormat";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../utility/ActionType";

function ProductCard({ product, flex, renderDescription }) {
  const { image, title, id, rating, price, description } = product;

  
  const [state, dispatch] = useContext(DataContext)

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        title,
        id,
        rating,
        price,
        description,
      },
    });
  };

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
      </Link>
      
      <button className={classes.button} onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
