import React from "react";
import "./trainers.css";
import profile1 from "../assets/images/profile1.jpg";
import profile2 from "../assets/images/profile2.jpg";
import profile3 from "../assets/images/profile3.jpg";

const Trainers = () => {
  return (
    <div class="trainer__main-div">
      <p class="p1">Our Team</p>
      <p class="p2">Your Sport Partner</p>
      <p class="p3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <div class="trainer-card">
        <div class="trainers">
          <img src={profile1} />
          <p class="trainers-p4">Melvin Rosario</p>
          <p class="trainers-p5">Personal Trainer</p>
        </div>
        <div class="trainers">
          <img src={profile2} />
          <p class="trainers-p4">Emre Andrews</p>
          <p class="trainers-p5">Personal Trainer</p>
        </div>
        <div class="trainers">
          <img src={profile3} />
          <p class="trainers-p4">Tatiana Head</p>
          <p class="trainers-p5">Yoga Trainer</p>
        </div>
      </div>
    </div>
  );
};

export default Trainers;
