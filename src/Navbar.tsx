import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TodoApp</div>
      <div className="navbar-links">
        <a href="#" className="navbar-link">List</a>
      </div>
    </nav>
  );
};

export default Navbar;
