import React from "react";
import "./classHero.css";
import Navbar from "../components/navbar";

const ClassHero = () => {
  return (
    <div>
      <div class="Class__hero-main-div">
        <Navbar />
        <div class="hero-div">
          <p>Classes</p>
        </div>
      </div>
    </div>
  );
};

export default ClassHero;
