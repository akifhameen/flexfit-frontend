import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dumbell from "../assets/images/dumbell.png";
import gym from "../assets/images/gym.png";
import treadmill from "../assets/images/treadmill.png";
import workout1 from "../assets/images/workout1.jpg";
import workout2 from "../assets/images/workout2.jpg";
import exercise from "../assets/images/exercise.png";
import check from "../assets/images/check.png";
import "./gymDetails.css";

const GymDetails = () => {
  return (
    <div class="gym__main-div">
      <div class="gym__details">
        <div class="gym__details-card">
          <div class="gym_-details-card-first-div">
            <img src={dumbell} />
            <p>Complete Gym</p>
          </div>
          <div class="gym_-details-card-second-div">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              id dolorem deleniti numquam quaerat.
            </p>
            <a href="#">Learn more</a>
          </div>
        </div>
        <div class="gym__details-card">
          <div class="gym_-details-card-first-div">
            <img src={gym} />
            <p>Comfort Place</p>
          </div>
          <div class="gym_-details-card-second-div">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              id dolorem deleniti numquam quaerat.
            </p>
            <a href="#">Learn more</a>
          </div>
        </div>
        <div class="gym__details-card">
          <div class="gym_-details-card-first-div">
            <img src={treadmill} />
            <p>Skills Trainers</p>
          </div>
          <div class="gym_-details-card-second-div">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              id dolorem deleniti numquam quaerat.
            </p>
            <a href="#">Learn more</a>
          </div>
        </div>
      </div>

      {/* second area*/}

      <div class="gym__second-main-div">
        <div class="gym__images">
          <img src={workout1} class="img1" />
          <div class="gym__images-info-main">
            <img src={workout2} class="img2" />
            <div class="gym__images-info">
              <img src={exercise} class="img3" />
              <p>We Are Trusted More Than 200 Customer</p>
            </div>
          </div>
        </div>
        <div class="gym__about-details">
          <p class="p1">About FlexFit</p>
          <p class="p2">A Comfortable Place With High Class Equipment</p>
          <p class="p3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </p>
          <div class="p4">
            <img src={check} />
            <p>Ready 24/7 Personal Trainer Service</p>
          </div>
          <div class="p4">
            <img src={check} />
            <p>A Hygiene & Comfortable Gym & Studio</p>
          </div>
          <div class="p4">
            <img src={check} />
            <p>Most Complete Gym Equipment & Sport Class</p>
          </div>
          <button class="btn">More About Us</button>
        </div>
      </div>
    </div>
  );
};
export default GymDetails;
