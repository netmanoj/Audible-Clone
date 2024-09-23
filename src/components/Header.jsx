import React from 'react';
import logo from '/audible.svg'; // Adjust the path if necessary

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={logo} alt="Logo" />
    </div>
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home">Library</a></li>
        <li><a href="#categories">Categories</a></li>
        <li><a href="#about">About Membership</a></li>
      </ul>
      <div className="nav-right">
        <div className="search-container">
          <input type="text" placeholder="Search" />
          <button className="search-btn">Search</button>
        </div>
        <button className="sign-in-btn">Sign In</button>
      </div>
    </nav>
  </header>
);

export default Header;

