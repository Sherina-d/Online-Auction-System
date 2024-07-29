import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    address: ''
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/user/${id}`);
        setUser(response.data);  
      } catch (error) {
        console.error(error);
        toast.error('Failed to fetch user details', { position: 'top-right' });
      }
    };

    fetchUser();
  }, [id]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/api/update/user/${id}`, user);
      toast.success(response.data.message, { position: 'top-right' });
      navigate('/');
    } catch (error) {
      toast.error('Failed to update user', { position: 'top-right' });
      console.error(error);
    }
  };

  return (
    <div className='container mt-5 d-flex justify-content-center align-items-center'>
      <div className='card w-50 shadow'>
        <div className="form-group">
          <Link to='/' className='btn btn-secondary m-4'>
            <i className="fa-solid fa-backward"></i> Back
          </Link>
        </div>
        <div className='card-header text-center'>
          <h3>Update User</h3>
        </div>
        <div className='card-body'>
          <form onSubmit={submitForm}>
            <div className='form-group'>
              <label htmlFor='name'>Name:</label>
              <input
                type='text'
                className='form-control mt-2'
                id='name'
                name='name'
                value={user.name}
                onChange={inputHandler}
              />
            </div>
            <div className='form-group mt-2'>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                className='form-control mt-2'
                id='email'
                name='email'
                value={user.email}
                onChange={inputHandler}
              />
            </div>
            <div className='form-group mt-2'>
              <label htmlFor='address'>Address:</label>
              <input
                type='text'
                className='form-control mt-2'
                id='address'
                name='address'
                value={user.address}
                onChange={inputHandler}
              />
            </div>
            <div className="form-group mt-2 d-flex justify-content-center">
              <button type='submit' className='btn btn-primary mt-5 w-50'>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
