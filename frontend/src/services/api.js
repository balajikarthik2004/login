import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

// Signup API call
export const signup = async (userData) => {
  return await API.post('/auth/signup', userData);
};

// Login API call
export const login = async (userData) => {
  return await API.post('/auth/login', userData);
}