import React from "react";
import "./classDetails.css";
import class_img from "../assets/images/tutorial.png";

const ClassDetails = () => {
  const temp = [1, 2, 3];
  return (
    <div class="class__main-div">
      <p class="class-p1">Our Classes</p>
      <p class="class-p2">Available Gym Classes</p>
      <p class="class-p3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <div class="class_card-div">
        {temp.map((index) => (
          <div class="class_item-div" key={index}>
            <img src={class_img} />
            <p class="class-p4">Body Building</p>
            <p class="class-p5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
            <button>Enroll</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClassDetails;
