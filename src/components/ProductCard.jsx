






import React, { useState } from "react";
import { useCart } from "../CartContext";
import "./ProductCard.css";

export default function ProductCard({ product }) {
  const { dispatch } = useCart();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="product-card">
        <img
          src={product.image}
          alt={product.title}
          className="product-img"
        />

        
        <p className="product-name">
          {product.title.length > 20 ? product.title.slice(0, 20) + "..." : product.title}
        </p>

        <p className="price">${product.price.toFixed(2)}</p>

        <div className="actions">
          <button
            className="view-details"
            onClick={() => setShowModal(true)}  
          >
            View Details
          </button>

          <button
            className="add-to-cart"
            onClick={() =>
              dispatch({ type: "ADD_TO_CART", payload: product })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>

      
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={() => setShowModal(false)}>&times;</span>

            <img src={product.image} alt={product.title} className="modal-img" />
            <h2>{product.title}</h2>
            <p className="modal-price">${product.price.toFixed(2)}</p>
            <p className="modal-desc">{product.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
