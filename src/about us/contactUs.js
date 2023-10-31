import React from "react";
import "./contactUs.css";
import clock from "../assets/images/clock.png";
import location from "../assets/images/location.png";
import email from "../assets/images/email.png";
import call from "../assets/images/phone-call.png";

const ContactUs = () => {
  return (
    <div class="contact__main-div">
      <p class="contact-p1">Contact Us</p>
      <p class="contact-p2">Get In Touch With Us</p>
      <p class="contact-p3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <div class="contact__details-div">
        <div class="contact-method">
          <img src={location} />
          <p class="contact-p4">Our Location</p>
          <p class="contact-p5">Jl. Raya Kuta No.70, Kuta</p>
        </div>
        <div class="contact-method">
          <img src={call} />
          <p class="contact-p4">Phone Number</p>
          <p class="contact-p5">(+62)546 158 361</p>
        </div>
        <div class="contact-method">
          <img src={email} />
          <p class="contact-p4">Email Us</p>
          <p class="contact-p5">Support@domain.com</p>
        </div>
        <div class="contact-method">
          <img src={clock} />
          <p class="contact-p4">Working Hours</p>
          <p class="contact-p5">Mon - Sat : 9.00 - 5.00</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;