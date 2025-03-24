import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BiSearch } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
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
              <a href="">
                <img src={logoimage} alt="amazon logo" />
              </a>
            </div>

            {/* delivery */}
            <div className={classes.Delivery}>
              <span>
                {<SlLocationPin />}
                <p>delivered To</p>
                Ethiopia
              </span>
            </div>

            <div className={classes.Search}>
              {/* <select name="" id="">
                <option  value="">All</option>
              </select> */}
              <input type="text" name="" id="" placeholder="search product" />
              {<BiSearch />}
              {/* icon */}
            </div>
            {/* rightsidenav */}
            <div>
              <div className={classes.Order}>
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
                <section>
                  <option value="">EN</option>
                </section>

                {/* three components */}
                <a href="">
                  <div className={classes.languages}>
                    <p>Sign In</p>
                    <span>Account and Lists</span>
                  </div>
                </a>
                {/* orders */}
                <a href="">
                  <p>Returns</p>
                  <span>& orders</span>
                </a>

                <a className={classes.cart} href="">
                  {<BiCart />}
                  <span>0</span>
                </a>
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
