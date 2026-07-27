import { Routes, Route } from "react-router";
import "./App.css";
import { HomePage } from "./Pages/HomePage/HomePage";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import OrdersPage from "./Pages/OrdersPage/OrdersPage";
import TrackingPage from "./Pages/TrackingPage/TrackingPage";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage></HomePage>}></Route>
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="tracking" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;
