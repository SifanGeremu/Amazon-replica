import React from "react";
import { Link } from "react-router-dom";
import classes from "../category/category.module.css";

function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <Link to={`/category/${encodeURIComponent(data.name.toLowerCase())}`}>
        <span>
          <h2>{data.title}</h2>
          <img src={data.imagelink} alt={data.title} />
          <p>Shop now</p>
        </span>
      </Link>
    </div>
  );
}

export default CategoryCard;
