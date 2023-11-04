import React from "react";
import "./classDetails.css";
import trainer from "../assets/images/male.png";

const HireTrainer = () => {
  const temp = [1, 2, 3];
  return (
    <div class="class__main-div">
      <p class="class-p1">Our Trainers</p>
      <p class="class-p2">Available Gym Trainers</p>
      <p class="class-p3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <div class="class_card-div">
        {temp.map((index) => (
          <div class="class_item-div" key={index}>
            <img src={trainer} />
            <p class="class-p4">Yoga Trainer</p>
            <p class="class-p5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore
            </p>
            <button>Hire Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HireTrainer;
