import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <h1 className="nav-brand">Bookstore CMS</h1>
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
    <div className="user-icon">User</div>
  </div>
);

export default Navbar;
