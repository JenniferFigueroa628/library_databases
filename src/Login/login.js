
import React, { useState } from 'react';
import './login.css'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
      <h2>Login</h2>
      <form className="form"> {/* Apply class names */}
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}
export default Login;