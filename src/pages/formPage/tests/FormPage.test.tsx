import { Mock, describe, it, vi } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';

import Form from '../../../widgets/form/Form';

import { ValidationAlert } from '../../../widgets/form/constants/messages';

import { useAppDispatch } from '../../../hooks/redux';

describe('FormPage', () => {
  vi.mock('../../../hooks/redux');
  beforeEach(() => {
    (useAppDispatch as Mock).mockReturnValue(vi.fn());
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders form submit button', () => {
    render(<Form />);
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument;
  });

  it('renders alert message before validation', async () => {
    render(<Form />);
    await act(async () => {
      const submitButton = screen.getByRole('button');
      fireEvent.click(submitButton);
    });
    const alert = screen.getByText('Please upload an image');
    expect(alert).toBeInTheDocument;
  });

  it('validates product name value', () => {
    render(<Form />);
    act(() => {
      const inputName = screen.getByPlaceholderText('Enter product name');
      fireEvent.change(inputName, { target: { value: 'Xiaomi' } });
      const submitButton = screen.getByRole('button');
      fireEvent.click(submitButton);
    });
    const alert = screen.queryByText(ValidationAlert.Title);
    expect(alert).toBeNull();
  });

  it('validates release date', () => {
    render(<Form />);
    act(() => {
      const inputs = document.querySelectorAll('input');
      fireEvent.change(inputs[1], { target: { value: '2022-02-02' } });
      const submitButton = screen.getByRole('button');
      fireEvent.click(submitButton);
    });
    const alert = screen.queryByText(ValidationAlert.Date);
    expect(alert).toBeNull();
  });

  it('validates product brand', () => {
    render(<Form />);
    act(() => {
      const select = screen.getByRole('combobox');
      fireEvent.change(select, { target: { value: 'Xiaomi' } });
      const submitButton = screen.getByRole('button');
      fireEvent.click(submitButton);
    });
    const alert = screen.queryByText(ValidationAlert.Brand);
    expect(alert).toBeNull();
  });

  it('validates discounted', () => {
    render(<Form />);
    act(() => {
      const radio = screen.getAllByRole('radio');
      fireEvent.click(radio[0]);
      const submitButton = screen.getByRole('button');
      fireEvent.click(submitButton);
    });
    const alert = screen.queryByText(ValidationAlert.Discount);
    expect(alert).toBeNull();
  });

  it('validates product thumbnail', () => {
    render(<Form />);
    act(() => {
      const inputs = document.querySelectorAll('input');
      const thumbnail = new File(['hello'], 'hello.png', { type: 'image/png' });
      fireEvent.change(inputs[4], { target: { files: [thumbnail] } });
      const submitButton = screen.getByRole('button');
      fireEvent.click(submitButton);
    });
    const alert = screen.queryByText(ValidationAlert.Thumbnail);
    expect(alert).toBeNull();
  });

  it('validates agreement', () => {
    render(<Form />);
    act(() => {
      const checkbox = screen.getByRole('checkbox');
      fireEvent.click(checkbox);
      const submitButton = screen.getByRole('button');
      fireEvent.click(submitButton);
    });
    const alert = screen.queryByText(ValidationAlert.Agree);
    expect(alert).toBeNull();
  });
});
