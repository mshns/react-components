import { Mock, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import Home from '../Home';
import { useGetSearchPhotosQuery } from '../../../store/reducers/apiSlice';
import { useAppSelector } from '../../../hooks/redux';

describe('Home Page', () => {
  vi.mock('../../../hooks/redux');
  vi.mock('../../../store/reducers/apiSlice');
  beforeEach(() => {
    (useAppSelector as Mock).mockReturnValue('');
    (useGetSearchPhotosQuery as Mock).mockReturnValue('');
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders alert after fetch', () => {
    render(<Home />);

    const alert = screen.getByText('Nothing found for your request. Please try again...');
    expect(alert).toBeInTheDocument();
  });
});
