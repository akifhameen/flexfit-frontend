import React from 'react';
import HomePage from './pages/homePage';
import Navigation from './navigation';
import LoginProvider from '../src/context/authContext';

const App = () => {
  return (
    <LoginProvider>
      <Navigation />
    </LoginProvider>
  );
};

export default App;
