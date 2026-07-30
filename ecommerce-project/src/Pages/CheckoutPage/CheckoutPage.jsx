import "./CheckoutPage.css";
import "./checkout-header.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./Paymentsummary";

export default function CheckoutPage({ cart, loadCart }) {
  const [deliveryOptions, setDeliveryOptions] = useState();

  useEffect(() => {
    axios
      .get("/api/delivery-options", {
        params: {
          expand: "estimatedDeliveryTime",
        },
      })
      .then((res) => {
        setDeliveryOptions(res.data);
      });
  }, []);

  return (
    <>
      <title>Checkout</title>

      <CheckoutHeader cart={cart} />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary
            cart={cart}
            deliveryOptions={deliveryOptions}
            loadCart={loadCart}
          />
          <PaymentSummary cart={cart} />
        </div>
      </div>
    </>
  );
}
