import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import WorkflowList from './components/Workflow/WorkflowList';
import WorkflowEditor from './components/Workflow/WorkflowEditor';
import './App.css';

// Simple auth check
const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('user') !== null;
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
            <WorkflowList />
          </PrivateRoute>
        } />
        <Route path="/editor/:id" element={
          <PrivateRoute>
            <WorkflowEditor />
          </PrivateRoute>
        } />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
