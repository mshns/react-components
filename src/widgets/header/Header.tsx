import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

import { IHeaderState } from './types/interfaces';

class Header extends React.Component<Record<string, never>, IHeaderState> {
  constructor(props: Record<string, never>) {
    super(props);

    this.state = {
      pageTitle: window.location.pathname === '/' ? 'Home Page' : 'About Us',
    };
  }

  render() {
    return (
      <header className="header">
        <h1 className="header_title">{this.state.pageTitle}</h1>
        <nav className="header_navigation">
          <ul className="navigation-list">
            <li className="navigation-item">
              <NavLink
                to="/"
                className="navigation-link"
                onClick={() => this.setState({ pageTitle: 'Home Page' })}
              >
                Home
              </NavLink>
            </li>
            <li className="navigation-item">
              <NavLink
                to="/about"
                className="navigation-link"
                onClick={() => this.setState({ pageTitle: 'About Us' })}
              >
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
