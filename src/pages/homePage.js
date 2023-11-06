import React from 'react';
import HeroSection from '../components/heroSection';
import GymDetails from '../components/gymDetails';
import ChosseUs from '../components/chooseUs';
import NewsLetter from '../components/newsLetter';
import './homePage.css';
import PackagesDetails from '../components/packagesDetails';
import NewsAlert from '../components/newsAlert';
import Credits from '../components/credits';

const HomePage = () => {
  return (
    <div>
      <div class='app__heroBanner'>
        <HeroSection />
      </div>
      <div class='app__newsAlert'>
        <NewsAlert />
      </div>
      <div class='app__credits'>
        <Credits />
      </div>
      <div class='app__gymDetails'>
        <GymDetails />
      </div>
      <div class='app__chooseUs'>
        <ChosseUs />
      </div>
      <div class='app__packagesDetails'>
        <PackagesDetails />
      </div>
      <div class='app__newsLetter'>
        <NewsLetter />
      </div>
    </div>
  );
};

export default HomePage;
