import { BrowserRouter } from 'react-router-dom';

import { Mock, describe, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';

import Modal from '../Modal';

describe('Modal', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders spinner in modal durring fetch', async () => {
    (fetch as Mock).mockResolvedValue({
      json: () =>
        Promise.resolve({
          urls: { regular: 'https://unsplash.com/photos/2Vb8JqMPNdw/download?ixid=M' },
          user: { name: 'string' },
          tags: [{ type: 'string', title: 'string' }],
          created_at: '2023-03-24',
          links: { download: 'string' },
        }),
    });
    await waitFor(() => {
      render(<Modal cardActive={''} setModalActive={vi.fn()} />, { wrapper: BrowserRouter });
      const spinner = screen.getByText('Loading...');
      expect(spinner).toBeInTheDocument();
    });
  });
});
