import React, { useState } from 'react';
import './login.css';
// import {Navbar}  from '../navbar/navbar';
import icon_menu from './icon_menu_.png';
import icon_user_square from './icon_user_square_.png';
import icon_shopping_cart from './icon_shopping_cart_.png';
import icon_clipboard_text from './icon_clipboard_text_.png';
import icon_book_saved from './icon_book_saved_.png';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [editingUsername, setEditingUsername] = useState(false);
  const [editingPassword, setEditingPassword] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    if (username === '123' && password === '123') {
      alert('Login successful');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  };

  const handleRegister = () => {
    // Add logic for handling registration here
  };

  return (
    <div className="index">
   
       
      <ul className='navbar'>
        <a href='#menu'>
          <img src={icon_menu} alt='Menu' className='MenuIcon'></img>
        </a>
        <a href='#book'>
          <img src={icon_book_saved} alt='Book' className='BookIcon'></img>
        </a>
        <a href='#file'>
          <img src={icon_clipboard_text} alt='File' className='FileIcon'></img>
        </a>
        <a href='#user'>
          <img src={icon_user_square} alt='user' className='User'></img>
        </a>
        <a href='#cart'>
          <img src={icon_shopping_cart} alt='Cart' className='CartIcon'></img>
        </a>
      </ul>

      <div className="div">
        <div className="login-input">
          <div className="text-wrapper">Welcome!</div>
          <div className="overlap-group">
            <div className="rectangle">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="text-wrapper-2">Password</div>
          </div>
          <div className="overlap">
            <div className="rectangle">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className="text-wrapper-2">Username</div>
          </div>
          <div className="div-wrapper" onClick={handleLogin}>
            <div className="text-wrapper-3" onClick={handleLogin}>
              Login
            </div>
          </div>
          <p className="don-t-have-an">
            <span className="span">Don’t have an account? </span>
            <span className="text-wrapper-4" onClick={handleRegister}>
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;