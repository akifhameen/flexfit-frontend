import React, { useState } from 'react';
import './addTrainer.css';
import ReusableSearch from './reusableSearch';
import TrainerList from './trainerList';

const AddTrainer = () => {
  const [trainer, setTrainer] = useState('');
  return (
    <div class='addTrainer__main-div'>
      <div class='addTrainer__sub-div'>
        <p>Add Trainer</p>
        <div class='search-bar-div'>
          <ReusableSearch setTrainer={setTrainer} />
        </div>
        <div class='search-list-div'>
          <TrainerList isTrainer={trainer} />
        </div>
      </div>
    </div>
  );
};

export default AddTrainer;
