import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        setPageTitle('Home Page');
        break;
      case '/about':
        setPageTitle('About Us');
        break;
      case '/form':
        setPageTitle('Form Page');
        break;
    }
  }, []);

  const handleClick = (title: string) => {
    setPageTitle(title);
  };

  return (
    <header className="header">
      <h1 className="header_title">{pageTitle}</h1>
      <nav className="header_navigation">
        <ul className="navigation-list">
          <li className="navigation-item">
            <NavLink to="/" className="navigation-link" onClick={() => handleClick('Home Page')}>
              Home
            </NavLink>
          </li>
          <li className="navigation-item">
            <NavLink
              to="/about"
              className="navigation-link"
              onClick={() => handleClick('About Us')}
            >
              About
            </NavLink>
          </li>
          <li className="navigation-item">
            <NavLink
              to="/form"
              className="navigation-link"
              onClick={() => handleClick('Form Page')}
            >
              Form
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
