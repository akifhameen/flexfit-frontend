import React from 'react';
import StoreHero from '../store/storeHero';
import StoreDetails from '../store/storeSupplements';
import './store.css';
import StoreEquipment from '../store/storeEquipment';

const Store = () => {
  return (
    <div>
      <div>
        <StoreHero />
      </div>
      <div class='store__Details-first-div'>
        <StoreDetails />
      </div>
      <div class='store__Details-second-div'>
        <StoreEquipment />
      </div>
    </div>
  );
};

export default Store;
