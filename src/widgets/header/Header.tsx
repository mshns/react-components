import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';

import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className="header_title">
          <Routes>
            <Route path="/" element={'Home Page'} />
            <Route path="/about" element={'About Us'} />
          </Routes>
        </h1>
        <nav className="header_navigation">
          <ul className="navigation-list">
            <li className="navigation-item">
              <NavLink to="/" className="navigation-link">
                Home
              </NavLink>
            </li>
            <li className="navigation-item">
              <NavLink to="/about" className="navigation-link">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
