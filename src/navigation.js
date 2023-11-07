import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage.js';
import SignIn from './pages/signIn.js';
import SignUp from './pages/signUp.js';
import AboutUs from './pages/aboutUs.js';
import Classes from './pages/classes.js';
import Store from './pages/store.js';
import Blogs from './pages/blogs.js';
import Navbar from './components/navBar.js';
import AdminPage from './pages/adminPage.js';
import TrainerPage from './pages/trainerPage.js';
import AddTrainer from './admin_options/addTrainer.js';
import AddAdmin from './admin_details/addAdmin.js';
import AddClass from './admin_details/addClass.js';
const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signIn' element={<SignIn />} />
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
