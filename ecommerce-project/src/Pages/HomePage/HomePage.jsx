import { Header } from "../../Components/Headers/Header";
import axios from "axios";

import "./HomePage.css";
import { useEffect, useState } from "react";
import { ProductGrid } from "./ProductGrid";
export function HomePage({ cart }) {
  const [products, setProducts] = useState();
  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <>
      <title>Ecommerce Project</title>
      <Header cart={cart}></Header>

      <div className="home-page">
        <ProductGrid products={products}></ProductGrid>
      </div>
    </>
  );
}
