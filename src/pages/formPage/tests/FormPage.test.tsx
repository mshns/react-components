import { describe, it } from 'vitest';
import { act, fireEvent, render, screen } from '@testing-library/react';

import FormPage from '../FormPage';

import { ValidationAlert } from '../../../widgets/form/constants/messages';

describe('FormPage', () => {
  it('renders form submit button', () => {
    render(<FormPage />);
    const submitButton = screen.getByRole('button');
    expect(submitButton).toBeInTheDocument;
  });

  it('renders alert message before validation', async () => {
    render(<FormPage />);
    await act(async () => {
      const submitButton = screen.getByRole('button');
      fireEvent.click(submitButton);
    });
    const alert = screen.getByText('Please upload an image');
    expect(alert).toBeInTheDocument;
  });

  it('validates product name value', () => {
    render(<FormPage />);
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
    render(<FormPage />);
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
    render(<FormPage />);
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
    render(<FormPage />);
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
    render(<FormPage />);
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
    render(<FormPage />);
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
