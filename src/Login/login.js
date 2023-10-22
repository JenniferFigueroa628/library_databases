import React, { useState } from 'react';
import './login.css'; 
import { Header } from '../navbar/navbar';
export const Login = () => {
  return (
    <div className="index">
      <Header/>
      <div className="div">
        <div className="login-input">
          <div className="text-wrapper">Welcome!</div>
          <div className="overlap-group">
            <div className="rectangle" />
            <div className="text-wrapper-2">Password</div>
          </div>
          <div className="overlap">
            <div className="rectangle" />
            <div className="text-wrapper-2">Username</div>
          </div>
          <div className="div-wrapper">
            <div className="text-wrapper-3">Login</div>
          </div>
          <p className="don-t-have-an">
            <span className="span">Don’t have an account? </span>
            <span className="text-wrapper-4">Register</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;