
import React, { useState } from 'react';
import './Register.css'; 
import icon_menu from './icon _menu_.svg';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Fname, setFname] = useState('');
  const [Lname, setLname] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e) =>{
    setFname(e.target.value);
  };

  const handleLastNameChange = (e) =>{
    setLname(e.target.value);
  };

  const handleEmailChange = (e) =>{
    setEmail(e.target.value);
  };

  const handleLogin = () => {
    // Add your authentication logic here
    if (username === '123' && password === '123') {
      // Successful login
      alert('Login successful');
    } else {
      // Failed login
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="container"> {/* Apply class names */}
      <link href='https://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'></link>
      <ul className='navbar'>
        <a href='#menu'>
          <img src={icon_menu} alt='Menu' className='MenuIcon'></img>
        </a>
      </ul>
      <form className="form"> {/* Apply class names */}
        <h2> Register</h2>
        <div>
          <label htmlFor="username">Username*:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password*:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="Fname">First Name*:</label>
          <input
            type="text"
            id="Fname"
            value={Fname}
            onChange={handleFirstNameChange}
          />
        </div>
        <div>
          <label htmlFor="Lname">Last Name*:</label>
          <input
            type="text"
            id="Lname"
            value={Lname}
            onChange={handleLastNameChange}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail*:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <button type="button" fontWeight= '700' onClick={handleLogin}>
          Submit
        </button>
      </form>
    </div>
  );
}
export default Register;
