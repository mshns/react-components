import { describe, it } from 'vitest';
import { createEvent, fireEvent, render, screen } from '@testing-library/react';

import SearchBar from '../SearchBar';

describe('SearchBar', () => {
  it('should prevent default action on submit', () => {
    render(<SearchBar />);
    const button = screen.getByRole('button');
    const submit = createEvent.submit(button);
    fireEvent(button, submit);
    expect(submit.defaultPrevented).toBe(true);
  });

  it('should updates on change input value', () => {
    render(<SearchBar />);
    const input = screen.getByRole('searchbox') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'student 1' } });
    expect(input.value).toBe('student 1');
  });
});
