import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import NotFound from '../NotFound';

describe('NotFound', () => {
  it('renders title', () => {
    render(<NotFound />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Page Not Found');
  });
});
