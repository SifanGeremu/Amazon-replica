import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import classes from "../Header/LowerHeader.module.css";
function LowerHeader() {
  return (
    <>
      <div className={classes.Lower__Container}>
        <ul>
          <li>
            <AiOutlineMenu />
            <p>All</p>
          </li>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>GiftCards</li>
          <li>Sell</li>
        </ul>
      </div>
    </>
  );
}

export default LowerHeader;
