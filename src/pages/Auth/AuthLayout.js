import React from 'react';
import './auth.css';
import { Outlet } from 'react-router';

const AuthLayout = () => {
  return (
    <div className='auth'>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
