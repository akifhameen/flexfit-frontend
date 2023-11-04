import React, { useState } from 'react';
import './navBar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [color, setColor] = useState('white');

  const navigateSignIn = () => {
    navigate('/signIn');
  };
  const navigateSignUp = () => {
    navigate('/signUp');
  };

  return (
    <div class='nav__main-div'>
      <div class='nav__name-div'>
        <p class='nav__name-p1'>
          Flex<span style={{ color: 'white' }}>Fit</span>
        </p>
      </div>
      <div class='nav__navigation' style={{ color: color }}>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/aboutUs'>About us</a>
          </li>
          <li>
            <a href='/classes'>Classes</a>
          </li>
          <li>
            <a href='/store'>Online shop</a>
          </li>
          <li>
            <a href='/blogs'>Blogs and Articles</a>
          </li>
        </ul>
      </div>
      <div class='nav__form-btn' style={{ color: color }}>
        <button onClick={navigateSignIn}>Sign In</button>
        <button onClick={navigateSignUp}>Sign Up</button>
      </div>
    </div>
  );
};
export default Navbar;
