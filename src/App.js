import React from 'react';
import Navigation from './navigation';
import AuthProvider from './authContext';

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
