import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import About from '../About';

describe('About', () => {
  it('Renders Title', () => {
    render(<About />);
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About');
  });
});
