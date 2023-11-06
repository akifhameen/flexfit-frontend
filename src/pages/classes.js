import React from 'react';
import './classes.css';
import ClassHero from '../classes/classHero';
import ClassDetails from '../classes/classDetails';
import HireTrainer from '../classes/hireTrainer';

const Classes = () => {
  return (
    <div>
      <div>
        <ClassHero />
      </div>
      <div class='class__details-section'>
        <ClassDetails />
      </div>
      <div class='class_trainer-section'>
        <HireTrainer />
      </div>
    </div>
  );
};

export default Classes;
