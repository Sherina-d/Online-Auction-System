import React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaPhone } from 'react-icons/fa';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="ml-auto d-flex w-100">
          <NavLink exact to="/home" className="nav-link" activeClassName="active">
            <FaHome className="mr-1" /> Home
          </NavLink>
          <NavLink to="/products" className="nav-link" activeClassName="active">
            Products
          </NavLink>
          <NavLink to="/cart" className="nav-link" activeClassName="active">
            <FaShoppingCart className="mr-1" /> My Bids
          </NavLink>
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            <FaPhone className="mr-1" /> Contact Us
          </NavLink>
        </div>
      </Navbar.Collapse>
      <Navbar.Brand className="ml-auto">My Fair Price</Navbar.Brand>
    </Navbar>
  );
};

export default NavigationBar;
