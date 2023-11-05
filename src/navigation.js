import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import AboutUs from './pages/aboutUs';
import Classes from './pages/classes';
import Store from './pages/store';
import Blogs from './pages/blogs';
import Navbar from './components/navBar';
import AdminPage from './pages/adminPage';
import TrainerPage from './pages/trainerPage';
import AddTrainer from './admin_options/addTrainer';
import AddAdmin from './admin_details/addAdmin';
import AddClass from './admin_details/addClass';
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
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/trainer' element={<TrainerPage />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/addTrainer' element={<AddTrainer />} />
            <Route path='/addAdmin' element={<AddAdmin />} />
            <Route path='/addClass' element={<AddClass />} />
          </Routes>
        </Navbar>
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
