import React from 'react';
import './classes.css';
import classHero from '../classes/classHero.js';
import classDetails from '../classes/classDetails.js';
import hireTrainer from '../classes/hireTrainer.js';

const Classes = () => {
  return (
    <div>
      <div>
        <classHero />
      </div>
      <div class='class__details-section'>
        <classDetails />
      </div>
      <div class='class_trainer-section'>
        <hireTrainer />
      </div>
    </div>
  );
};

export default Classes;
