import { Mock, describe, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';

import Home from '../Home';

describe('Home Page', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders spinner durring fetch', async () => {
    (fetch as Mock).mockResolvedValue({ json: () => Promise.resolve('') });
    render(<Home />);
    await waitFor(() => {
      const spinner = screen.getByText('Loading...');
      expect(spinner).toBeInTheDocument();
    });
  });
});
