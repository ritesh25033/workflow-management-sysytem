// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { loginUser } from '../../services/api';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import './Auth.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await loginUser(email, password);
//       if (result.success) {
//         navigate('/dashboard');
//       }
//     } catch (error) {
//       alert('Login failed. Please check your credentials.');
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
//             <h4 className="text-center mb-2">WELCOME BACK!</h4>
//             <h2 className="text-center mb-4">Log In to your Account</h2>
            
//             <Form onSubmit={handleSubmit}>
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
              
//               <div className="d-flex justify-content-between mb-4">
//                 <Form.Check 
//                   type="checkbox" 
//                   label="Remember me" 
//                   checked={rememberMe}
//                   onChange={(e) => setRememberMe(e.target.checked)}
//                 />
//                 <a href="#forgot" className="text-decoration-none">Forgot Password?</a>
//               </div>
              
//               <Button variant="danger" type="submit" className="w-100 py-2">
//                 Log In
//               </Button>
              
//               <div className="text-center mt-3">
//                 <p>or</p>
//                 <Button variant="outline-danger" className="w-100 py-2" onClick={() => navigate('/signup')}>
//                   Create New Account
//                 </Button>
//               </div>
//             </Form>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login;


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
