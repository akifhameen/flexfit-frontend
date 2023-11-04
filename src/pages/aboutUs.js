import React from 'react';
import './aboutUs.css';
import AboutHero from '../about us/aboutHero';
import FirstSection from '../about us/firstSection';
import Trainers from '../about us/trainers';
import Footer from '../components/footer';
import ContactUs from '../about us/contactUs';

const AboutUs = () => {
  return (
    <div>
      <div>
        <AboutHero />
      </div>
      <div class='first-section'>
        <FirstSection />
      </div>
      <div class='trainer-section'>
        <Trainers />
      </div>
      <div class='trainer-contact'>
        <ContactUs />
      </div>
      <div class='trainer-footer'>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
