import React from 'react'
import './heroSection.css'
import Lottie from 'react-lottie'
import hero1 from '../assets/images/hero1.jpg'
import hero2 from '../assets/images/hero2.jpg'
import animation from '../assets/lotties/animation.json'

const HeroSection = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animation,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <div class="hero__main-div">
        <div class="hero__first-div">
            <p class="p1">Wellcome to FlexFit</p>
            <p class="p2">The Most Complete Gym To Work Out</p>
            <p class="p3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Utenimad minim veniam.</p>
            <div class="hero__btn">
                <button>About Us</button>
                <a href='#'>Learn more</a>
            </div>
        </div>
        <div class='hero__image-div'>
            <img class="img1" src={hero1} />
            <div class="hero__image-subDiv">
                <div>
                    <img class="img2" src={hero2} />
                </div>
                <div class="hero__member-card">
                    <div><Lottie options={defaultOptions} height={100} width={100}/></div>
                    <div>
                        <p class="card-p1">500 +</p>
                        <p class="card-p2">Members</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSection