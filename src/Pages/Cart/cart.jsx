import React, { useContext } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
const ProductCard = React.lazy(() =>
  import("../../Components/product/ProductCard")
);
import CurrencyFormat from "../../Components/currency/CurrencyFormat";
import { Link } from "react-router-dom";
import classes from "../Cart/Cart.module.css";
import { Type } from "../../utility/ActionType"; 

function Cart() {
  const [{ basket }, dispatch] = useContext(DataContext);

  const total = basket.reduce(
    (amount, item) => amount + item.price * (item.quantity || 1),
    0
  );

  // ✅ Increment quantity
  const incrementItem = (id) => {
    dispatch({
      type: Type.INCREMENT_QUANTITY,
      id,
    });
  };

  // ✅ Decrement quantity (Remove if quantity becomes 0)
  const decrementItem = (id) => {
    dispatch({
      type: Type.DECREMENT_QUANTITY,
      id,
    });
  };

  // ✅ Remove item from cart
  const removeItem = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <LayOut>
      <section className={classes.Cart}>
        <div className={classes.Products__container}>
          <h2>Hello, Here is Your Cart</h2>
          <hr />
          {basket.length === 0 ? (
            <p>Oops! No items in your cart</p>
          ) : (
            basket.map((item, i) => (
              <div key={i} className={classes.CartItem}>
                <ProductCard
                  product={item}
                  renderDesc={true}
                  flex={true}
                  renderAddToCart={false}
                />
                <div className={classes.QuantityControls}>
                  <button onClick={() => decrementItem(item.id)}>-</button>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => incrementItem(item.id)}>+</button>
                  <button onClick={() => removeItem(item.id)}>Remove</button>
                </div>
              </div>
            ))
          )}
        </div>

       
        {basket.length !== 0 && (
          <div className={classes.subTotal}>
            <p>SubTotal({basket.length} items)</p>
            <CurrencyFormat amount={total} />
            <span className={classes.checkbox}>
              <input type="checkbox" />
              <small>This Order Contains a gift</small>
            </span>
            <Link to="/payement">Continue To CheckOut</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
