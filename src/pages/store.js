import React from 'react';
import StoreHero from '../store/storeHero';
import StoreDetails from '../store/storeSupplements';
import './store.css';
import StoreEquipment from '../store/storeEquipment';
import Footer from '../components/footer';

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
      <div class='store__Details-third-div'>
        <Footer />
      </div>
    </div>
  );
};

export default Store;
