import React from 'react';
import './footer.css';
import {
  FiMapPin,
  FiChevronRight,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
  FiFacebook,
} from 'react-icons/fi';

const Footer = () => {
  return (
    <div class='footer__main-div'>
      <div class='footer__first-div'>
        <p class='p1'>
          Flex<span>Fit</span>
        </p>
        <p class='p2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </p>
        <div class='sub-div'>
          <div class='sub-div-area'>
            <FiMapPin size={20} fill='#D76810' />
            <p>Jl. Raya Kuta No.70, Kuta</p>
          </div>
          <div class='sub-div-area'>
            <FiMail size={20} fill='#D76810' />
            <p>support@domain.com</p>
          </div>
          <div class='sub-div-area'>
            <FiPhone size={20} fill='#D76810' />
            <p>(+62)546 158 361</p>
          </div>
        </div>
      </div>

      <div class='footer__second-div'>
        <p class='p1'>Other Pages</p>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <a>Home</a>
        </div>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <a>About us</a>
        </div>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <a>Classes</a>
        </div>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <a>Online shop</a>
        </div>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <a>Blogs and Articles</a>
        </div>
      </div>

      <div class='footer__third-div'>
        <p class='p1'>Quick Links</p>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <a>Privacy Policy</a>
        </div>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <a>Term Of Service</a>
        </div>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <a>Disclaimer</a>
        </div>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <a>Credits</a>
        </div>
        <div class='sub-div-area'>
          <FiChevronRight size={20} stroke='#D76810' />
          <a>FAQ</a>
        </div>
      </div>
      <div class='footer__fourth-div'>
        <p class='p1'>Newsletter</p>
        <div class='form'>
          <input
            type='text'
            name='name'
            required
            placeholder='Enter Your Email..'
          />
          <button>Send</button>
        </div>
        <p class='p2'>Get the latest news & updates</p>
        <div class='social-App'>
          <FiLinkedin
            class='icon'
            size={20}
            fill='white'
            stroke='white'
            style={{ backgroundColor: '#0072b1', padding: 10 }}
          />
          <FiTwitter
            class='icon'
            size={20}
            fill='white'
            stroke='white'
            style={{ backgroundColor: '#1DA1F2', padding: 10 }}
          />
          <FiYoutube
            class='icon'
            size={20}
            stroke='white'
            style={{ backgroundColor: '#c4302b', padding: 10 }}
          />
          <FiFacebook
            class='icon'
            size={20}
            fill='white'
            stroke='white'
            style={{ backgroundColor: '#3b5998', padding: 10 }}
          />
        </div>
      </div>
    </div>
  );
};
export default Footer;
