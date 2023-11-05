import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import AboutUs from './pages/aboutUs';
import Classes from './pages/classes';
import Store from './pages/store';
import Blogs from './pages/blogs';
import Navbar from './components/navBar';
import { useState } from 'react';
const Navigation = () => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Navbar isAuth={isAuth}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signIn' element={<SignIn setIsAuth={setIsAuth} />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/aboutUs' element={<AboutUs />} />
            <Route path='/classes' element={<Classes />} />
            <Route path='/store' element={<Store />} />
            <Route path='/blogs' element={<Blogs />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
