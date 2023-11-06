import React, { useEffect, useState } from 'react';
import './navBar.css';
import Footer from '../components/footer';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../context/authContext';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  const navigate = useNavigate();
  const { isAuth } = useLogin();
  // const [isAuth1, setIsAuth1] = useState(false);
  const [role, setRole] = useState('admin');
  // useEffect(() => {
  //   const test1 = localStorage.getItem('isAuth') === true;
  //   setIsAuth1(test1);
  // }, []);

  console.log('nav bar ', isAuth);

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
              <Link to='/'>Home</Link>
            </li>

            <li>
              <Link to='/aboutUs'>About us</Link>
            </li>
            <li>
              <Link to='/classes'>Classes</Link>
            </li>
            <li>
              <Link to='/store'>Online shop</Link>
            </li>
            <li>
              <Link to='/blogs'>Blogs and Articles</Link>
            </li>
          </ul>
        </div>
        <div class='nav__form-btn'>
          {isAuth === true && role === 'admin' && (
            <div class='nav__form-btn2'>
              <p>Welcome Admin</p>
              <button onClick={navigateAdmin}>Admin Panel</button>
              <button>Log out</button>
            </div>
          )}
          {isAuth === true && role === 'trainer' && (
            <div class='nav__form-btn2'>
              <p>Welcome Trainer</p>
              <button onClick={navigateTrainer}>Trainer Panel</button>
              <button>Log out</button>
            </div>
          )}
          {isAuth ? null : (
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
