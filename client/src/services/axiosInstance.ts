import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

export const authenticateSignup = async (data: {
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  email: string;
  phone: string;
}) => {
  try {
    const response = await axiosInstance.post('/signup', data);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error('Error while posting signup data: ', error);
        throw error;
      } else if (error.request) {
        console.error('No response received: ', error.request);
        throw error;
      } else {
        console.error('Error in setting up the request: ', error.message);
        throw error;
      }
    } else {
      // handle other errors that are not Axios errors
      console.error('An unexpected error occurred: ', error);
      throw error;
    }
  }
};

export const authenticateLogin = async (data: {
  username: string;
  password: string;
}) => {
  try {
    const response = await axiosInstance.post('/login', data);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error('Error while posting login data: ', error);
        throw error;
      } else if (error.request) {
        console.error('No response received: ', error.request);
        throw error;
      } else {
        console.error('Error in setting up the request: ', error.message);
        throw error;
      }
    } else {
      // handle other errors that are not Axios errors
      console.error('An unexpected error occurred: ', error);
      throw error;
    }
  }
};
