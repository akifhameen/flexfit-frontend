import React from "react";
import image from "../assets/images/about-user.jpg";
import "./firstSection.css";

const FirstSection = () => {
  return (
    <div class="section__main-div">
      <div class="section-img">
        <img src={image} alt="user" />
      </div>
      <div class="section-details">
        <p class="p1">About Us</p>
        <p class="p2">Work Out With The Most Complete Gym Equipment</p>
        <p class="p3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sint a
          non quibusdam laboriosam. Error odit doloremque tenetur quod aperiam
          rerum! Hic rem nostrum nulla ipsa. Qui aspernatur mollitia alias!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, eius
          saepe voluptates magnam minus adipisci quam. A provident voluptatibus
          illo! Consequatur quia voluptatem pariatur aut obcaecati provident
          iusto natus dolor? Itaque perspiciatis autem corporis pariatur cumque
          ratione nobis! Soluta atque error dolores doloremque odit dolorum
          nulla obcaecati similique deserunt laudantium, adipisci vel velit
          minus, earum eum, accusamus libero repellat cum.
        </p>
        <div class="experience">
          <div class="awards">
            <p class="p4">AWARDS</p>
            <p class="p5">50 +</p>
          </div>
          <div class="rating">
            <p class="p4">HAPPY CLIENT</p>
            <p class="p5">450 +</p>
          </div>
          <div class="work-exp">
            <p class="p4">WORK EXPERIENCE</p>
            <p class="p5">5 +</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FirstSection;
