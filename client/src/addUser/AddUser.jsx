import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AddUser = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  // State to manage form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  // Destructure form data
  const { name, email, password } = formData;

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to the server
      const response = await axios.post('http://localhost:8000/api/signup', formData);
      toast.success(response.data.message, { position: 'top-right' });
      navigate('/login'); // Navigate to login page after successful sign up
    } catch (error) {
      toast.error('Failed to create user. Please try again.', { position: 'top-right' });
      console.error(error);
    }
  };

  return (
    <div className='container mt-5'>
      <div className='card shadow w-50 mx-auto'>
        <div className='card-body text-center'>
          <h2 className='card-title mb-4'>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                id='name'
                name='name'
                value={name}
                onChange={handleChange}
                placeholder='Enter Your Name'
                required
              />
            </div>
            <div className='form-group mt-3'>
              <input
                type='email'
                className='form-control'
                id='email'
                name='email'
                value={email}
                onChange={handleChange}
                placeholder='Enter Your Email'
                required
              />
            </div>
            <div className='form-group mt-3'>
              <input
                type='password'
                className='form-control'
                id='password'
                name='password'
                value={password}
                onChange={handleChange}
                placeholder='Enter Your Password'
                required
              />
            </div>
            <div className='form-group d-flex justify-content-center'>
              <button type='submit' className='btn btn-primary mt-4 w-50'>
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
