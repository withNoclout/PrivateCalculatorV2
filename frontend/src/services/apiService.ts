import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth tokens if needed in the future
api.interceptors.request.use(
  (config) => {
    // Add auth token here if needed
    // const token = localStorage.getItem('authToken');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for handling common errors
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error('API Error:', error);
    
    if (error.response?.status === 401) {
      // Handle unauthorized access
      // Redirect to login or refresh token
    }
    
    return Promise.reject(error);
  }
);

export const apiService = {
  // Health check
  checkHealth: async () => {
    return api.get('/health');
  },

  // Equation solving
  solveEquation: async (equation: string) => {
    return api.post('/calculator/solve', { equation });
  },

  // Matrix operations
  performMatrixOperation: async (matrix: number[][], operation: string) => {
    return api.post('/matrix/operations', { matrix, operation });
  },

  // Generic GET request
  get: async (endpoint: string) => {
    return api.get(endpoint);
  },

  // Generic POST request
  post: async (endpoint: string, data: any) => {
    return api.post(endpoint, data);
  },

  // Generic PUT request
  put: async (endpoint: string, data: any) => {
    return api.put(endpoint, data);
  },

  // Generic DELETE request
  delete: async (endpoint: string) => {
    return api.delete(endpoint);
  },
};
