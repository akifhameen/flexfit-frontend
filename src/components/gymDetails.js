import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import dumbell from '../assets/images/dumbell.png'
import gym from '../assets/images/gym.png'
import treadmill from '../assets/images/treadmill.png'
import './gymDetails.css'

const GymDetails = () => {
    return (
      <div class="gym__main-div">
        <div class="gym__details">
            <div class="gym__details-card">
                <div class="gym_-details-card-first-div">
                    <img src={dumbell} />
                    <p>Complete Gym</p>
                </div>
                <div class='gym_-details-card-second-div'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, id dolorem deleniti numquam quaerat.</p>
                    <a href='#'>Learn more</a>
                </div>
            </div>
            <div class="gym__details-card">
                <div class="gym_-details-card-first-div">
                    <img src={gym} />
                    <p>Comfort Place</p>
                </div>
                <div class='gym_-details-card-second-div'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, id dolorem deleniti numquam quaerat.</p>
                    <a href='#'>Learn more</a>
                </div>
            </div>
            <div class="gym__details-card">
                <div class="gym_-details-card-first-div">
                    <img src={treadmill} />
                    <p>Skills Trainers</p>
                </div>
                <div class='gym_-details-card-second-div'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, id dolorem deleniti numquam quaerat.</p>
                    <a href='#'>Learn more</a>
                </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default GymDetails