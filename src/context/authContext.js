import React, { useContext, useState } from 'react';
import { createContext } from 'react';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState('');
  const test = localStorage.getItem('auth');
  console.log('contexst side auth :', test);

  return (
    <LoginContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </LoginContext.Provider>
  );
};
export const useLogin = () => useContext(LoginContext);
export default LoginProvider;
