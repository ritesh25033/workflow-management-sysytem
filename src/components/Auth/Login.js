import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/api';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      navigate('/dashboard');
    } catch (error) {
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="auth-container">
      <div className="left-panel">
        <div className="logo">
          <img src="/assets/logo.png" alt="HighBridge" />
          <h1>HighBridge</h1>
        </div>
        <h2>Building the Future...</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="right-panel">
        <div className="login-form">
          <h4>WELCOME BACK!</h4>
          <h2>Log In to your Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input 
                type="email" 
                placeholder="Type here..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                placeholder="Type here..." 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-options">
              <label className="remember-me">
                <input 
                  type="checkbox" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="checkmark"></span>
                Remember me
              </label>
              <a href="#forgot">Forgot Password?</a>
            </div>
            <button type="submit" className="btn-login">Log In</button>
          </form>
          <div className="divider">
            <span>or</span>
          </div>
          <button className="btn-create-account" onClick={() => navigate('/signup')}>
            Create New Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
