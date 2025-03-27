import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/api';
import './Auth.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    
    try {
      await registerUser(name, email, password);
      navigate('/dashboard');
    } catch (error) {
      alert('Registration failed. Please try again.');
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
          <h4>JOIN US!</h4>
          <h2>Create a New Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder="Type here..." 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
            <div className="form-group">
              <label>Confirm Password</label>
              <input 
                type="password" 
                placeholder="Type here..." 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-login">Sign Up</button>
          </form>
          <div className="divider">
            <span>or</span>
          </div>
          <button className="btn-create-account" onClick={() => navigate('/login')}>
            Already have an account? Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
