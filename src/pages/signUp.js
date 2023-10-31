import React from 'react'
import weights from '../assets/images/weights.png'
import './signUp.css'

const SignUp = () => {
    return(
        <div class='signup__main-div'>
            <div class="signup__form-div">
                <img src={weights} />
                <p class="p1">Wellcome !</p>
                <p class="p2">Sign Up</p>
                <form>
                    <div class="name-div">
                        <input class="input1" type="text" name="name" placeholder='First Name' required />
                        <input type="text" name="name" placeholder='Last Name' required />
                    </div>
                    <input type="email" name="email" placeholder='Email' required />
                    <input type="password" name="password" placeholder='Password' required />
                    <input type="password" name="confirmPassword" placeholder='Confirm Password' required />
                    <button>Submit</button>
                </form>
                <p class="p3">Already have an account ? <span><a href='/signin'>Sign In</a></span></p>
            </div>
      </div>
    );
}

export default SignUp