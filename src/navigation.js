import { BrowserRouter, Route ,Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import AboutUs from "./pages/aboutUs";
const Navigation = () => {
    return (
      <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/signin" element={<SignIn/>} />
                <Route path="/signup" element={<SignUp/>} />
                <Route path="/aboutus" element={<AboutUs/>} />
            </Routes>
        </BrowserRouter>
      </div>
    )
  }
  
  export default Navigation