import { Routes, Route } from "react-router";
import "./App.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import OrdersPage from "./Pages/OrdersPage/OrdersPage";
import TrackingPage from "./Pages/TrackingPage/TrackingPage";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState();
  const loadCart = useCallback(async () => {
    const response = await axios.get("/api/cart-items?expand=product");
    setCart(response.data);
  }, []);
  useEffect(() => {
    async function init() {
      await loadCart();
    }

    init();
  }, [loadCart]);
  return (
    <Routes>
      <Route
        index
        element={<HomePage cart={cart} loadCart={loadCart}></HomePage>}
      ></Route>
      <Route path="checkout" element={<CheckoutPage cart={cart} />} />
      <Route path="orders" element={<OrdersPage cart={cart} />} />
      <Route
        path="tracking/:orderId/:productId"
        element={<TrackingPage cart={cart} />}
      />
    </Routes>
  );
}

export default App;
