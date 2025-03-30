import React from "react";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BiSearch, BiCart } from "react-icons/bi";
import classes from "../Header/Header.module.css";
import LowerHeader from "./LowerHeader";

import logoimage from "../../assets/images/amazonlogo1.jpg";

function Header() {
  return (
    <>
      <section>
        <section>
          <div className={classes.Header__container}>
            {/* logo */}
            <div className={classes.Logo__container}>
              <Link to="/">
                <img src={logoimage} alt="amazon logo" />
              </Link>
            </div>

            {/* delivery */}
            <div className={classes.Delivery}>
              <span>
                <SlLocationPin />
                <p>delivered To</p>
                Ethiopia
              </span>
            </div>

            <div className={classes.Search}>
              <input type="text" placeholder="search product" />
              <BiSearch />
            </div>

            {/* right side nav */}
            <div>
              <div className={classes.Order}>
                <img
                  src='#'
                  alt=""
                />
                <section>
                  <option value="">EN</option>
                </section>

                {/* Sign In */}
                <Link to="/auth" className={classes.languages}>
                  <p>Sign In</p>
                  <span>Account and Lists</span>
                </Link>

                {/* Orders */}
                <Link to="/orders" className={classes.orders}>
                  <p>Returns</p>
                  <span>& Orders</span>
                </Link>

                {/* Cart */}
                <Link to="/cart" className={classes.cart}>
                  <BiCart />
                  <span>0</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
      <LowerHeader />
    </>
  );
}

export default Header;
