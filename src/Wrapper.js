import React from 'react';
import Routes from './Routes';
import AuthProvider from './context/AuthProvider';

const Wrapper = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Wrapper;
