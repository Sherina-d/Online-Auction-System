import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://yourapi.com', // Your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
  // No need to specify an adapter, axios will use the appropriate one for the environment
});

export default axiosInstance;
