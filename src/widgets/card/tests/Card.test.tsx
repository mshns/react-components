import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Card from '../Card';

describe('Card', () => {
  it('renders title', () => {
    render(
      <Card
        title={'Realme 10 4G'}
        description={
          'Best performance in its class. The best display in its class. Best in class. Your need for power has been satisfied.'
        }
        price={249}
        discount={15}
        brand={'Realme'}
        category={'Smartphones'}
        thumbnail={
          'https://raw.githubusercontent.com/mshns/online-store/develop/src/assets/data/3/thumbnail.jpg'
        }
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
        title={'Xiaomi 12 Pro'}
        description={
          'Every precious moment in life deserves the best shot whether it in motion or still, bright or dark. We are ready to make moments mega, and so should you.'
        }
        price={899}
        discount={17}
        brand={'Xiaomi'}
        category={'Smartphones'}
        thumbnail={
          'https://raw.githubusercontent.com/mshns/online-store/develop/src/assets/data/2/thumbnail.jpg'
        }
      />
    );
    const image = screen.getByAltText('Xiaomi 12 Pro');
    expect(image).toHaveAttribute('src');
  });
});
