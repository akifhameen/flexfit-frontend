import React from 'react';
import './packagesDetails.css';
import check from '../assets/images/check.png';

function PackagesDetails() {
  return (
    <div class='packages__main-div'>
      <div class='packages__details'>
        <p class='details-p1'>Our Pricing</p>
        <p class='details-p2'>Affordable Pricing Plans For You</p>
        <p class='details-p3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco labori
        </p>
        <div class='details-div'>
          <div class='check-P'>
            <img src={check} />
            <p>Duis aute irure dolor in reprehenderit</p>
          </div>
          <div class='check-P'>
            <img src={check} />
            <p>Quis nostrud exercitation ullamco laboris</p>
          </div>
          <div class='check-P'>
            <img src={check} />
            <p>Voluptatem accusantium doloremque</p>
          </div>
          <div class='check-P'>
            <img src={check} />
            <p>Numquam eius modi tempora incidunt</p>
          </div>
        </div>
        <button>All Pricing</button>
      </div>
      <div class='packages__first-package'>
        <p class='package-p1'>Premium Packages</p>
        <p class='package-p2'>
          $110,40<span>/month</span>
        </p>
        <p>-----------------------------</p>
        <div class='package-div'>
          <div class='check-P'>
            <img src={check} />
            <p>Get All Courses</p>
          </div>
          <div class='check-P'>
            <img src={check} />
            <p>Group Classes</p>
          </div>
          <div class='check-P'>
            <img src={check} />
            <p>Personal Training</p>
          </div>
          <div class='check-P'>
            <img src={check} />
            <p>Free Soft Drinks</p>
          </div>
          <div class='check-P'>
            <img src={check} />
            <p>Free Four Towels</p>
          </div>
        </div>
        <button>Get Started</button>
      </div>
      <div class='packages__second-package'>
        <p class='second-pack-p1'>Basic Packages</p>
        <p class='second-pack-p2'>
          $89,40<span>/month</span>
        </p>
        <p>-----------------------------</p>
        <div class='second-div'>
          <div class='check-P1'>
            <img src={check} />
            <p>Group Classes</p>
          </div>
          <div class='check-P1'>
            <img src={check} />
            <p>Free Soft Drink</p>
          </div>
          <div class='check-P1'>
            <img src={check} />
            <p>Personal Training</p>
          </div>
          <div class='check-P1'>
            <img src={check} />
            <p>Free Towel</p>
          </div>
        </div>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default PackagesDetails;
