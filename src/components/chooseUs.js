import React from 'react';
import './chooseUs.css';
import chooseUs_image from '../assets/images/chooseUs.jpg';
import check from '../assets/images/check.png';

const ChosseUs = () => {
  return (
    <div class='choose__main-dev'>
      <div class='choose__explain-details'>
        <p class='p1'>Why Choose Us</p>
        <p class='p2'>A Complete Gym & Easy Access to The Place</p>
        <p class='p3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris
        </p>
        <div class='percentage'>
          <div class='percentage-div1'>
            <p>Equipment Quality</p>
            <div class='container1'>
              <div class='percentage1 line1'>80%</div>
            </div>
          </div>
          <div class='percentage-div2'>
            <p>Flexible Time</p>
            <div class='container1'>
              <div class='percentage2 line2'>92%</div>
            </div>
          </div>
          <div class='percentage-div3'>
            <p>Expert Trainer</p>
            <div class='container1'>
              <div class='percentage1 line3'>86%</div>
            </div>
          </div>
        </div>

        <div class='more-details'>
          <div class='first-div'>
            <div class='p4'>
              <img src={check} />
              <p>24/7 Phone counseling services for clients</p>
            </div>
            <div class='p4'>
              <img src={check} />
              <p>Really know the true needs and expectations of clients</p>
            </div>
          </div>
          <div class='second-div'>
            <div class='p4'>
              <img src={check} />
              <p>Really know the true needs and expectations of clients</p>
            </div>
            <div class='p4'>
              <img src={check} />
              <p>
                All reports for clients are made simple and easy to understand
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class='choose__second-dev'>
        <img src={chooseUs_image} />
      </div>
    </div>
  );
};
export default ChosseUs;
