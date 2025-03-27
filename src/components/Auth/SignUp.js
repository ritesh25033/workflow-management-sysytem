// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { registerUser } from '../../services/api';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import './Auth.css';

// const SignUp = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       alert("Passwords don't match");
//       return;
//     }
    
//     try {
//       const result = await registerUser(name, email, password);
//       if (result.success) {
//         navigate('/dashboard');
//       }
//     } catch (error) {
//       alert('Registration failed. Please try again.');
//     }
//   };

//   return (
//     <Container fluid className="auth-container p-0">
//       <Row className="m-0">
//         <Col md={7} className="left-panel d-flex flex-column justify-content-center align-items-start p-5">
//           <div className="logo mb-5">
//             <h1 className="text-white">HighBridge</h1>
//           </div>
//           <h2 className="text-white mb-4">Building the Future...</h2>
//           <p className="text-white">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//           </p>
//         </Col>
//         <Col md={5} className="right-panel d-flex align-items-center justify-content-center">
//           <div className="login-form-container p-4">
//             <h4 className="text-center mb-2">JOIN US!</h4>
//             <h2 className="text-center mb-4">Create a New Account</h2>
            
//             <Form onSubmit={handleSubmit}>
//               <Form.Group className="mb-3">
//                 <Form.Label>Full Name</Form.Label>
//                 <Form.Control 
//                   type="text" 
//                   placeholder="Type here..." 
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//               </Form.Group>
              
//               <Form.Group className="mb-3">
//                 <Form.Label>Email</Form.Label>
//                 <Form.Control 
//                   type="email" 
//                   placeholder="Type here..." 
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </Form.Group>
              
//               <Form.Group className="mb-3">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control 
//                   type="password" 
//                   placeholder="Type here..." 
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </Form.Group>
              
//               <Form.Group className="mb-4">
//                 <Form.Label>Confirm Password</Form.Label>
//                 <Form.Control 
//                   type="password" 
//                   placeholder="Type here..." 
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   required
//                 />
//               </Form.Group>
              
//               <Button variant="danger" type="submit" className="w-100 py-2">
//                 Sign Up
//               </Button>
              
//               <div className="text-center mt-3">
//                 <p>Already have an account? <a href="#login" onClick={() => navigate('/login')}>Log In</a></p>
//               </div>
//             </Form>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SignUp;


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
