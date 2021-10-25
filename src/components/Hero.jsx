import React from "react";
import heroImage from "../Images/hero-img-min.png";
function Hero() {
  return (
    <div className="hero" id="hero" tabIndex={-1}>
      {window.scrollTo({ top: 0, behavior: "smooth" })}
      <div className="inner-hero">
        <div className="text">
          <div className="text-container">
            <h1 className="title">Lorem ipsum dolor sit amet maxime</h1>
            <h3 className="subtitle">
              Nemo ut explicabo sunt est recusandae necessitatibus non quis
            </h3>
            <p className="hero-button">Learn now</p>
          </div>
        </div>
        <img className="hero-img" src={heroImage} alt="hero-img" />
      </div>
    </div>
  );
}

export default Hero;
