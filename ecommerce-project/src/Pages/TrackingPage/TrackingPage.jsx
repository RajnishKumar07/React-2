import { useParams } from "react-router";
import { Header } from "../../Components/Headers/Header";
import "./TrackingPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
export default function TrackingPage({ cart }) {
  const params = useParams();
  const { orderId, productId } = params;
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const response = await axios.get(`/api/orders/${orderId}`, {
        params: {
          expand: "products",
        },
      });
      setOrder(response.data);
    };
    fetchOrder();
  }, [orderId]);

  const selectedProduct = order?.products.find(
    (p) => p.productId === productId,
  );

  const totalDeliveryTimeMs =
    selectedProduct?.estimatedDeliveryTimeMs - order?.orderTimeMs;
  const timePassedMs = (dayjs().valueOf = order?.orderTimeMs);
  let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100;
  deliveryPercent = Math.min(deliveryPercent, 100);

  const isPreparing = deliveryPercent < 33;
  const isShipped = deliveryPercent >= 33 && deliveryPercent < 100;
  const isDelivered = deliveryPercent === 100;

  return (
    <>
      <title>Tracking</title>
      <Header cart={cart}></Header>
      {order && (
        <div className="tracking-page">
          <div className="order-tracking">
            <a className="back-to-orders-link link-primary" href="/orders">
              View all orders
            </a>

            <div className="delivery-date">
              Arriving on{" "}
              {dayjs(selectedProduct.estimatedDeliveryTimeMs).format(
                "dddd, MMMM D",
              )}
            </div>

            <div className="product-info">{selectedProduct.product.name}</div>

            <div className="product-info">
              Quantity: {selectedProduct.quantity}
            </div>

            <img
              className="product-image"
              src={selectedProduct.product.image}
            />

            <div className="progress-labels-container">
              <div
                className={`progress-label ${isPreparing && "current-status"}`}
              >
                Preparing
              </div>
              <div
                className={`progress-label ${isShipped && "current-status"}`}
              >
                Shipped
              </div>
              <div
                className={`progress-label ${isDelivered && "current-status"}`}
              >
                Delivered
              </div>
            </div>

            <div className="progress-bar-container">
              <div
                className="progress-bar"
                style={{ width: `${deliveryPercent}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
