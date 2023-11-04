import React from "react";
import Navbar from "../components/navBar";
import "./aboutHero.css";

const AboutHero = () => {
  return (
    <div>
      <div class="About__hero-main-div">
        <Navbar />
        <div class="hero-div">
          <p>About Us</p>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
