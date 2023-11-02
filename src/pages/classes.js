import React from "react";
import "./classes.css";
import ClassHero from "../classes/classHero";
import ClassDetails from "../classes/classdetails";
import HireTrainer from "../classes/hiretrainer";
import Footer from "../components/footer";
import Packages from "../components/packagesDetails";

const Classes = () => {
  return (
    <div>
      <div>
        <ClassHero />
      </div>
      <div class="class__details-section">
        <ClassDetails />
      </div>
      <div class="class_trainer-section">
        <HireTrainer />
      </div>
      <div class="class_packages-section">
        <Packages />
      </div>
      <div class="class_footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default Classes;
