import { BrowserRouter } from 'react-router-dom';

import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Header from '../Header';

describe('Header', () => {
  it('renders page title', () => {
    render(<Header />, { wrapper: BrowserRouter });
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home Page');
  });

  it('gets pathname', () => {
    Object.defineProperty(window, 'location', {
      value: new URL('https://mshns-react.netlify.app/about'),
    });
    render(<Header />, { wrapper: BrowserRouter });
    expect(window.location.pathname).toBe('/about');
  });
});
