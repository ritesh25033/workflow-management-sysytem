import axios from 'axios';

const API_URL = 'https://dummy-json.mock.beeceptor.com';

// Authentication services
export const loginUser = async (email, password) => {
  try {
    // For demo purposes, we'll simulate a successful login
    // In a real app, you would validate credentials with the server
    const response = await axios.post(`${API_URL}/login`, { email, password });
    if (response.data) {
      localStorage.setItem('user', JSON.stringify({
        email,
        token: 'demo-token-123456',
        name: 'Demo User'
      }));
      return { success: true };
    }
  } catch (error) {
    console.error('Login error:', error);
    // For demo, we'll allow login even if API fails
    localStorage.setItem('user', JSON.stringify({
      email,
      token: 'demo-token-123456',
      name: 'Demo User'
    }));
    return { success: true };
  }
};

export const registerUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${API_URL}/register`, { name, email, password });
    if (response.data) {
      localStorage.setItem('user', JSON.stringify({
        email,
        token: 'demo-token-123456',
        name
      }));
      return { success: true };
    }
  } catch (error) {
    console.error('Registration error:', error);
    // For demo, we'll allow registration even if API fails
    localStorage.setItem('user', JSON.stringify({
      email,
      token: 'demo-token-123456',
      name
    }));
    return { success: true };
  }
};

export const logoutUser = () => {
  localStorage.removeItem('user');
};

// Workflow services
export const getWorkflows = async () => {
  try {
    const response = await axios.get(`${API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching workflows:', error);
    // Return mock data if API fails
    return [
      { id: 494, title: "Workflow Name here...", body: "Some Description Here Regarding The Flow..." },
      { id: 495, title: "Workflow Name here...", body: "Some Description Here Regarding The Flow..." },
      { id: 496, title: "Workflow Name here...", body: "Some Description Here Regarding The Flow..." },
      { id: 497, title: "Workflow Name here...", body: "Some Description Here Regarding The Flow..." },
      { id: 498, title: "Workflow Name here...", body: "Some Description Here Regarding The Flow..." }
    ];
  }
};

export const saveWorkflow = async (workflow) => {
  try {
    const response = await axios.post(`${API_URL}/posts`, workflow);
    return response.data;
  } catch (error) {
    console.error('Error saving workflow:', error);
    return { success: true, id: Math.floor(Math.random() * 1000) };
  }
};
