import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">TodoApp</Link>
      </div>
      <div className="navbar-links">
          <Link className="navbar-link" to="/list">List</Link>        
      </div>
    </nav>
  );
};

export default Navbar;
