import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./login.css";
const Login = () => {
  const initialUserState = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialUserState);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/login",
        user
      );
      toast.success(response.data.message, { position: "top-right" });
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      toast.error("Login failed. Please check your credentials.", {
        position: "top-right",
      });
      console.error(error);
    }
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center main">
      <div className="card  w-50 border-0 shadow-lg">
        <div className="card-body text-center">
          <h2 className="card-title mb-4">
            Welcome back, {user.name || "User"}!
          </h2>
          <form onSubmit={submitForm}>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                onChange={inputHandler}
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={inputHandler}
                placeholder="Enter Your Password"
                required
              />
            </div>
            <div className="form-group  d-flex justify-content-center">
              <Link
                to={"/home"}
                type="button"
                className="btn btn-primary mt-4 w-50"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
        <div className="card-footer text-muted text-center">
          <p className="mb-0">Don't have an account?</p>
          <Link to="/home" className="btn btn-info mt-3">
            Sign Up <i className="fas fa-user-plus"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
