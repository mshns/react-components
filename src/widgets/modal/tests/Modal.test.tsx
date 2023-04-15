import { BrowserRouter } from 'react-router-dom';

import { Mock, describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import Modal from '../Modal';

import { useGetPhotoByIdQuery } from '../../../store/reducers/apiSlice';

describe('Modal', () => {
  vi.mock('../../../store/reducers/apiSlice');
  beforeEach(() => {
    (useGetPhotoByIdQuery as Mock).mockReturnValue('');
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders title in modal', () => {
    render(<Modal cardActive={''} setModalActive={vi.fn()} />, { wrapper: BrowserRouter });
    const title = screen.getByText('Unknown author');
    expect(title).toBeInTheDocument();
  });
});
