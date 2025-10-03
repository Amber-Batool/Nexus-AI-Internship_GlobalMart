
import React from "react";
import { useCart } from "../CartContext";
import "./CartPanel.css";

export default function CartPanel({ isOpen, onClose }) {
  const { cart, dispatch } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`cart-panel ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <ul className="cart-items">
            {cart.map(item => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-img" />
                <div className="cart-item-info">
                  <strong>{item.title}</strong><br />
                  <span>${item.price} × {item.quantity}</span>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}


