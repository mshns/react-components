import { Mock, describe, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from '../App';

import { useAppSelector } from '../../hooks/redux';
import { useGetSearchPhotosQuery } from '../../store/reducers/apiSlice';

describe('App', () => {
  vi.mock('../../hooks/redux');
  vi.mock('../../store/reducers/apiSlice');
  beforeEach(() => {
    (useAppSelector as Mock).mockReturnValue(vi.fn());
    (useGetSearchPhotosQuery as Mock).mockReturnValue(vi.fn());
  });

  it('navigates after clicking menu link', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const aboutLink = screen.getByText('About');
    fireEvent.click(aboutLink);
    expect(
      screen.getByRole('heading', {
        level: 2,
      })
    ).toHaveTextContent('About Us');
  });

  it('renders pages', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    const copyright = screen.getByText('React 2023');
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
    const copyright = screen.getByText('React 2023');
    expect(copyright).toBeInTheDocument();
  });
});
