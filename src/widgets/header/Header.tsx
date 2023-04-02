import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import './Header.scss';

const Header = () => {
  const location = useLocation();
  const [pageTitle, setPageTitle] = useState('');

  useEffect(() => {
    switch (location.pathname.replace(/\//g, '')) {
      case '':
        setPageTitle('Home Page');
        break;
      case 'about':
        setPageTitle('About Us');
        break;
      case 'form':
        setPageTitle('Form Page');
        break;
    }
  }, [location.pathname]);

  return (
    <header className="header">
      <h1 className="header_title">{pageTitle}</h1>
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
          <li className="navigation-item">
            <NavLink to="/form" className="navigation-link">
              Form
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
