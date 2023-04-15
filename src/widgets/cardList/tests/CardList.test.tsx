import { Mock, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardList from '../CardList';

import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { useGetSearchPhotosQuery } from '../../../store/reducers/apiSlice';

describe('CardList', () => {
  vi.mock('../../../hooks/redux');
  vi.mock('../../../store/reducers/apiSlice');

  beforeEach(() => {
    (useAppSelector as Mock).mockReturnValue('');
    (useAppDispatch as Mock).mockReturnValue(vi.fn());
    (useGetSearchPhotosQuery as Mock).mockReturnValue(vi.fn());
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders alert about bad request', () => {
    render(<CardList />);
    const alert = screen.getByText('Nothing found for your request. Please try again...');
    expect(alert).toBeInTheDocument();
  });
});
