import React from 'react';
import HeroSection from '../components/heroSection';
import Navbar from '../components/navBar';
import GymDetails from '../components/gymDetails';
import ChosseUs from '../components/chooseUs';
import NewsLetter from '../components/newsLetter';
import Footer from '../components/footer';
import './homePage.css';
import PackagesDetails from '../components/packagesDetails';

const HomePage = () => {
  return (
    <div>
      <div class='app__heroBanner'>
        <Navbar />
        <HeroSection />
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
      <div class='app__footer'>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
