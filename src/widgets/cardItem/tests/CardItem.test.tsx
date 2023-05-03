import { describe, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardItem from '../CardItem';

describe('Card', () => {
  it('renders title', () => {
    render(
      <CardItem
        card={{
          id: 'Title',
          created_at: '2023-03-24',
          urls: {
            full: 'https://unsplash.com/photos/2Vb8JqM',
            raw: 'https://unsplash.com/photos/2Vb8JqMPNdw/download?',
            regular: 'https://unsplash.com/photos/2Vb8JqMPNdw/download?ixid=M',
            small: 'https://unsplash.com/photos/2Vb8JqMPNdw/download?ixid=Mnw0MzIxO',
            small_s3: 'https://unsplash.com/photos/2Vb8JqMPNdw/download?ixid=Mnw',
            thumb: 'https://unsplash.com/photos/2Vb8JqMPNdw/download?ixid=Mnw0M',
          },
          description: 'ololo',
          alt_description: 'olllh hdgfgd',
          updated_at: '2023-03-24',
          likes: 725,
          user: {
            id: 'sdfdf',
            updated_at: 'string',
            username: 'string',
            name: 'string',
          },
          tags: [{ type: 'string', title: 'string' }],
          links: {
            download: 'string',
            download_location: 'string',
            html: 'string',
            self: 'string',
          },
        }}
        setModalActive={vi.fn()}
        setCardActive={vi.fn()}
      />
    );
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('ololo');
  });
});
