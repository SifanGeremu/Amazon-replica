import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { db } from "../../utility/Firebase";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import classes from "../orders/Orders.module.css";
import {
  collection,
  doc,
  orderBy,
  onSnapshot,
  query,
} from "firebase/firestore";
import ProductCard from '../../Components/product/ProductCard';

function Orders() {
  const [{ user }] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const q = query(
        collection(doc(db, "users", user.uid), "orders"),
        orderBy("created", "desc")
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const orderData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(orderData);
      });

      return () => unsubscribe(); 
    }
  }, [user]);

  return (
    <LayOut>
      <section className={classes.Orders}>
        <div className={classes.orders__container}>
          <h2>Your Orders</h2>

          {orders.map((order) => (
            <div key={order.id} className={classes.order}>
              <p>
                <strong>Order ID:</strong> {order.id}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(order.created).toLocaleString()}
              </p>

              <div className={classes.order__items}>
                {order.items?.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </LayOut>
  );
}

export default Orders;
