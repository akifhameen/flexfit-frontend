import React, { useState } from 'react';
import './signIn.css';
import weights from '../assets/images/weights.png';

const SignIn = (props) => {
  return (
    <div class='signin__main-div'>
      <div class='signin__form-div'>
        <img src={weights} />
        <p class='p1'>Good to see you again !</p>
        <p class='p2'>Sign In</p>
        <form>
          <input
            class='inputEmail'
            autoCapitalize='none'
            type='email'
            name='name'
            placeholder='Email'
            required
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            required
          />
          <button
            onClick={() => {
              props.setIsAuth(true);
            }}
          >
            Submit
          </button>
        </form>
        <p class='p3'>
          Don't have an account ?{' '}
          <span>
            <a href='/signUp'>Sign Up</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
