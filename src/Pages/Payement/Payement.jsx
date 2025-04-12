import React, { useContext, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import classes from "../Payement/payement.module.css";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../Components/currency/CurrencyFormat";
import { axiosInstance } from "../../API/axios";
import { db } from "../../utility/Firebase";
import { collection, doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";

function Payement() {
  const [{ basket, user }] = useContext(DataContext);
  const [error, setError] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const itemCount = basket.reduce(
    (count, item) => count + (item.quantity || 1),
    0
  );

  const total = basket.reduce(
    (amount, item) => amount + item.price * (item.quantity || 1),
    0
  );

  const handleChange = (event) => {
    setError(event.error ? event.error.message : null);
  };

  const handlePayement = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || basket.length === 0) return;

    setIsProcessing(true);

    try {
      // Create a PaymentIntent
      const response = await axiosInstance.post(
        `/payment/create?total=${total * 100}`
      );

      const client_secret = response.data?.client_secret;

      // Confirm the payment
      const confirmation = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (confirmation.error) {
        setError(confirmation.error.message);
      } else {
        setError(null);
        console.log("Payment successful:", confirmation.paymentIntent);

        
        const orderRef = doc(
          collection(db, "users", user.uid, "orders"),
          confirmation.paymentIntent.id
        );

        await setDoc(orderRef, {
          basket: basket,
          amount: confirmation.paymentIntent.amount,
          created: confirmation.paymentIntent.created,
        });
        navigate("/orders", {
          state: { msg: "You have placed a new order, thank you" },
        });

      }

      console.log(confirmation);
    } catch (err) {
      console.error("Payment failed:", err);
      setError("Payment failed. Please try again.");
    }

    setIsProcessing(false);
  };

  return (
    <LayOut>
      <div className={classes.Payement_header}>
        Checkout ({itemCount}) items
      </div>
      <hr />
      <section className={classes.Payement}>
        <div className={classes.flex}>
          <h3>Address</h3>
          <div>{user?.email || "Guest"}</div>
          <div>04,980 street</div>
          <div>Harar, Jegol</div>
        </div>
        <hr />
        <div className={classes.flex}>
          <h3>Review items and delivery</h3>
          {basket?.map((item, index) => (
            <ProductCard key={index} product={item} />
          ))}
        </div>
        <form onSubmit={handlePayement} className={classes.PaymentForm}>
          <h3>Payment Details</h3>
          <div className={classes.CardElement}>
            <CardElement onChange={handleChange} />
          </div>
          {error && <div className={classes.ErrorMessage}>{error}</div>}
          <button type="submit" disabled={!stripe || isProcessing}>
            {isProcessing ? "Processing..." : "Pay Now"}
          </button>
        </form>
        <div className={classes.total}>
          <h3>Total is</h3>
          <CurrencyFormat className={classes.amount} amount={total} />
        </div>
      </section>
    </LayOut>
  );
}

export default Payement;
