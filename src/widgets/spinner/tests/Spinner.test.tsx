import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Spinner from '../Spinner';

describe('Spinner', () => {
  it('renders notification', () => {
    render(<Spinner />);
    const notification = screen.getAllByText('Loading...');
    expect(notification).toBeInTheDocument;
  });
});
