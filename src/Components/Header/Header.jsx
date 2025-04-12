import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { BiSearch, BiCart } from "react-icons/bi";
import classes from "../Header/Header.module.css";
import LowerHeader from "./LowerHeader";
import logoimage from "../../assets/images/amazonlogo1.jpg";
import { DataContext } from "../DataProvider/DataProvider";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);

  return (
    <section className={classes.fixed}>
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
                <p>Delivered To</p>
                Ethiopia
              </span>
            </div>

            {/* search */}
            <div className={classes.Search}>
              <input type="text" placeholder="Search product" />
              <BiSearch />
            </div>

            {/* right side nav */}
            <div>
              <div className={classes.Order}>
                <img src="#" alt="" />
                <section>
                  <option value="">EN</option>
                </section>

                {/* Sign In / Sign Out */}
                <Link to="/auth" className={classes.languages}>
                  <div>
                    <p>Hello {user ? user.email.split("@")[0] : "Guest"}</p>
                    <p>{user ? "Sign Out" : "Sign In"}</p>
                    <span>Account and Lists</span>
                  </div>
                </Link>

                {/* Orders */}
                <Link to="/orders" className={classes.orders}>
                  <p>Returns</p>
                  <span>& Orders</span>
                </Link>

                {/* Cart */}
                <Link to="/cart" className={classes.cart}>
                  <BiCart />
                  <span>{basket?.length || 0}</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
