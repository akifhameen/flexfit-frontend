import React, { useEffect, useState } from 'react';
import './navBar.css';
import { useNavigate } from 'react-router-dom';
import Footer from './footer';

const Navbar = (props) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(props.isAuth);
  useEffect(() => {
    setIsAuth(props.isAuth);
  }, [props.isAuth]);

  console.log('isauauau 2', isAuth);

  const navigateSignIn = () => {
    navigate('/signIn');
  };
  const navigateSignUp = () => {
    navigate('/signUp');
  };

  return (
    <div>
      <div class='nav__main-div'>
        <div class='nav__name-div'>
          <p class='nav__name-p1'>
            Flex<span style={{ color: 'white' }}>Fit</span>
          </p>
        </div>
        <div class='nav__navigation'>
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
        <div class='nav__form-btn'>
          {isAuth ? (
            <div class='nav__form-btn2'>
              <p>Welcome Admin</p>
              <button>Manage account</button>
              <button>Log out</button>
            </div>
          ) : (
            <div>
              <button onClick={navigateSignIn}>Sign In</button>
              <button onClick={navigateSignUp}>Sign Up</button>
            </div>
          )}
        </div>
      </div>
      {props.children}
      <div class='footer_area'>
        <Footer />
      </div>
    </div>
  );
};
export default Navbar;
