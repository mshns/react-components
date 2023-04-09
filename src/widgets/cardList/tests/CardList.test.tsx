import { it } from 'vitest';
import { render, screen } from '@testing-library/react';

import CardList from '../CardList';

it('renders alert about bad request', () => {
  render(<CardList itemList={[]} />);

  const alert = screen.getByText('Nothing found for your request. Please try again...');
  expect(alert).toBeInTheDocument();
});
