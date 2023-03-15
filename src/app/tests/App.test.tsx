import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  it('renders copyright', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const copyright = screen.getByText('React Components 2023');
    expect(copyright).toBeInTheDocument();
  });
});
