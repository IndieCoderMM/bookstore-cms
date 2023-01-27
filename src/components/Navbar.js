import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => (
  <div className="navbar">
    <h1>
      <NavLink to="/" className="nav-brand">
        Bookstore CMS
      </NavLink>
    </h1>
    <nav>
      <ul className="nav-list">
        <li>
          <NavLink to="/" className="nav-link">
            Books
          </NavLink>
        </li>
        <li>
          <NavLink to="/categories" className="nav-link">
            Categories
          </NavLink>
        </li>
      </ul>
    </nav>
    <button type="button" className="user-icon">
      <FaUserAlt />
    </button>
  </div>
);

export default Navbar;
