import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://restcountries.com/v3.1', 
  timeout: 8000, 
  headers: {
    'Content-Type': 'application/json', 
  }
});




