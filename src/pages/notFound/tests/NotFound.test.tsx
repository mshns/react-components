import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NotFound from '../NotFound';

describe('NotFound', () => {
  it('renders title', () => {
    render(<NotFound />, { wrapper: BrowserRouter });
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Page Not Found');
  });
});
