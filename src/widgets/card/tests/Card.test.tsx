import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from '../Card';

describe('Card', () => {
  it('renders title', () => {
    render(
      <Card
        card={{
          id: 1,
          title: 'Realme 10 4G',
          date: '2023-03-24',
          discount: true,
          brand: 'Realme',
          thumbnail:
            'https://raw.githubusercontent.com/mshns/online-store/develop/src/assets/data/3/thumbnail.jpg',
        }}
      />
    );
    expect(
      screen.getByRole('heading', {
        level: 3,
      })
    ).toHaveTextContent('Realme 10 4G');
  });

  it('renders image', () => {
    render(
      <Card
        card={{
          id: 2,
          title: 'Xiaomi 12 Pro',
          date: '2023-01-20',
          discount: false,
          brand: 'Xiaomi',
          thumbnail:
            'https://raw.githubusercontent.com/mshns/online-store/develop/src/assets/data/2/thumbnail.jpg',
        }}
      />
    );
    const image = screen.getByAltText('Xiaomi 12 Pro');
    expect(image).toHaveAttribute('src');
  });
});
