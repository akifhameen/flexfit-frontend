import React, { useEffect, useState } from 'react';
import './navBar.css';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState('true');
  const [role, setRole] = useState('admin');
  // useEffect(() => {
  //   setIsAuth(props.isAuth);
  // }, [props.isAuth]);

  console.log('isauauau 2', isAuth);

  const navigateSignIn = () => {
    navigate('/signIn');
  };
  const navigateAdmin = () => {
    navigate('/admin');
  };
  const navigateSignUp = () => {
    navigate('/signUp');
  };
  const navigateTrainer = () => {
    navigate('/trainer');
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
          {isAuth === 'true' && role === 'admin' && (
            <div class='nav__form-btn2'>
              <p>Welcome Admin</p>
              <button onClick={navigateAdmin}>Admin Panel</button>
              <button>Log out</button>
            </div>
          )}
          {isAuth === 'true' && role === 'trainer' && (
            <div class='nav__form-btn2'>
              <p>Welcome Trainer</p>
              <button onClick={navigateTrainer}>Trainer Panel</button>
              <button>Log out</button>
            </div>
          )}
          {isAuth === 'false' && (
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
