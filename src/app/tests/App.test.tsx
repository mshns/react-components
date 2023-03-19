import { describe, it } from 'vitest';
import { act, render, screen } from '@testing-library/react';

import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  it('navigates after clicking menu link', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    act(() => {
      const aboutLink = screen.getByText('About');
      aboutLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('About Us');
  });

  it('renders pages', () => {
    render(
      <MemoryRouter initialEntries={['/', '/about']}>
        <App />
      </MemoryRouter>
    );
    const copyright = screen.getByText('React Components 2023');
    expect(copyright).toBeInTheDocument();
  });

  it('renders not found page', () => {
    render(
      <MemoryRouter initialEntries={['/hfhfgfffdfvvcv']}>
        <App />
      </MemoryRouter>
    );
    const error = screen.getByText('Error 404');
    expect(error).toBeInTheDocument();
  });

  it('renders footer', () => {
    render(<App />, { wrapper: BrowserRouter });
    const copyright = screen.getByText('React Components 2023');
    expect(copyright).toBeInTheDocument();
  });
});
