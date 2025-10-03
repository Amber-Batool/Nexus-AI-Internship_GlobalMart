
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import ContactForm from "./components/ContactForm";
import CartPanel from "./components/CartPanel";
import { CartProvider } from "./CartContext";
import Footer from "./components/Footer";

export default function App() {
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <Navbar onCartToggle={() => setCartOpen(true)} />
        <Hero />
      <ProductGrid />
      <ContactForm />
      <Footer />
      <CartPanel isOpen={isCartOpen} onClose={() => setCartOpen(false)} />

    </CartProvider>
  );
}

