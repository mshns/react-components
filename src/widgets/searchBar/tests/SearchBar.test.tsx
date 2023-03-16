import { describe, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import SearchBar from '../SearchBar';

describe('SearchBar', () => {
  it('should updates on change input value', () => {
    render(<SearchBar />);
    const input = screen.getByRole('searchbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'student 1' } });
    expect(input.value).toBe('student 1');
  });
});
