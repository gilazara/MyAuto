import axios from 'axios';

// Read base URLs from Vite environment variables
const API2_BASE_URL = import.meta.env['VITE_API2_BASE_URL'] as string;
const STATIC_MY_BASE_URL = import.meta.env['VITE_STATIC_MY_BASE_URL'] as string;

export const api2AxiosInstance = axios.create({
  baseURL: API2_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const staticMyAxiosInstance = axios.create({
  baseURL: STATIC_MY_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
