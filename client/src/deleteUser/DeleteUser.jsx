import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const DeleteUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.log("Error while fetching data", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/delete/user/${id}`);
      toast.success(response.data.message, { position: 'top-right' });
      // After successful deletion, fetch updated user list
      const updatedUsers = users.filter(user => user._id !== id);
      setUsers(updatedUsers);
    } catch (error) {
      toast.error('Failed to delete user', { position: 'top-right' });
      console.error(error);
    }
  };

  return (
    <div className='userTable'>
      {/* Link for navigating to Add User page */}
      <Link to="/add" type="button" className="btn btn-primary">Add User  <i className="fas fa-user-plus"></i></Link>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}> {/* Assuming each user object has a unique _id */}
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address}</td>
              <td className='actionButtons'>
                {/* Link to Update User page */}
                <Link to={`/update/${user._id}`} type="button" className="btn btn-info"><i className="fas fa-pen-to-square"></i></Link>
                {/* Delete button */}
                <button type="button" className="btn btn-danger" onClick={() => handleDelete(user._id)}>
                  <i className="fas fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteUser;
