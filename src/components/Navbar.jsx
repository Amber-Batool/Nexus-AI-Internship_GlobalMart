




import React, { useState } from "react";
import { useCart } from "../CartContext";
import "./Navbar.css";

export default function Navbar({ onCartToggle }) {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
     
      <div className="brand">
       
        <div className="namee">GlobalMart</div>
      </div>

   
      <nav>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li><a href="#" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#featured-products" onClick={() => setIsOpen(false)}>Shop</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li>
            <button className="cart-btn" onClick={onCartToggle}>
              Cart <span className="badge">{totalItems}</span>
            </button>
          </li>
        </ul>
      </nav>

      
      <div className="burger" onClick={() => setIsOpen(!isOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
}
