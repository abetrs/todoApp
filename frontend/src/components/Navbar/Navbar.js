import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div id="nav-bar">
      <Link to="/">Home </Link>
      <Link to="/login">Log in </Link>
      <Link to="/signup">Signup </Link>
    </div>
  );
}

export default Navbar;