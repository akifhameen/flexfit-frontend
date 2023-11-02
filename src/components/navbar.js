import React, { useState } from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

const navigate = useNavigate();
const [color , setColor] = useState('white');

const navigateSignIn = () => {
    navigate('/signin');
}
const navigateSignUp = () => {
    navigate('/signup');
}


  return (
    <div class="nav__main-div">
        <div class="nav__name-div">
            <p class="nav__name-p1">Flex<span style={{ color:'white' }}>Fit</span></p>
        </div>
        <div class="nav__navigation" style={{ color:color }}>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/aboutus'>About us</a></li>
                <li><a>Classes</a></li>
                <li><a>Online shop</a></li>
                <li><a>Blogs and Articles</a></li>
            </ul>
        </div>
        <div class="nav__form-btn" style={{ color:color }}>
            <button onClick={ navigateSignIn }>Sign In</button>
            <button onClick={ navigateSignUp }>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar;
