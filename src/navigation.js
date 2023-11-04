import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import AboutUs from './pages/aboutUs';
import Classes from './pages/classes';
import Store from './pages/store';
import Blogs from './pages/blogs';
const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/classes' element={<Classes />} />
          <Route path='/store' element={<Store />} />
          <Route path='/blogs' element={<Blogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
