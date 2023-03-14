import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('App', () => {
  it('Renders Title', () => {
    // ARRANGE
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('React Components');
  });
});
