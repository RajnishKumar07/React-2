import { Routes, Route } from "react-router";
import "./App.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import OrdersPage from "./Pages/OrdersPage/OrdersPage";
import TrackingPage from "./Pages/TrackingPage/TrackingPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [cart, setCart] = useState();
  useEffect(() => {
    axios.get("/api/cart-items").then((res) => {
      setCart(res.data);
    });
  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart}></HomePage>}></Route>
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
