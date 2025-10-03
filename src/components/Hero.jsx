import React from "react";
import "./Hero.css"; 

const Hero = () => {
  return (
    <section className="hero">
      <img
        src="images/banner.jpg"
        alt="Hero Banner"
        className="hero-img"
      />
      <div className="hero-text">
        <h1>Welcome to GlobalMart</h1>
        <p>Your one-stop shop for everything!</p>
        <a href="#featured-products" className="btn">
          Shop Now
        </a>
       
      </div>
    </section>
  );
};

export default Hero;
