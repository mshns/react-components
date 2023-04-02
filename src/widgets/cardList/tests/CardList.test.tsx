import { describe, it } from 'vitest';
import { render } from '@testing-library/react';

import CardList from '../CardList';

describe('CardList', () => {
  it('should be 40 cards', () => {
    const { container } = render(<CardList />);
    const cards = container.getElementsByClassName('card');
    expect(cards.length).toBe(5);
  });
});
