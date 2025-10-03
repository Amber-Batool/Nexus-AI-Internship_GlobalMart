
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useCart } from "../CartContext"; 
import "./ProductGrid.css";

export default function ProductGrid() {
  const [products, setProducts] = useState([]);
  const { dispatch } = useCart();

  useEffect(() => {
   
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  
  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <main>
      <h2 id="featured-products">Featured Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 16,
          padding: 16,
        }}
      >
        {products.length === 0 ? (
          <p>Loading products...</p>
        ) : (
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
        )}
      </div>
    </main>
  );
}
