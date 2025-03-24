import React from "react";
import classes from '../category/category.module.css'
function CategoryCard({ data }) {
  return (
    <div className={classes.category}>
      <a href="">
        <span>
          <h2>{data.title}</h2>
          <img src={data.imagelink} alt="" />
          <p>shop now</p>
        </span>
      </a>
    </div>
  );
}

export default CategoryCard;
