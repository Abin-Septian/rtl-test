import React from 'react';
import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

test('increments the counter when the button is clicked', () => {
  const { getByText } = render(<Button />);
  const button = getByText('Click me!');
  const counter = getByText('0');

  fireEvent.click(button);

  expect(counter.textContent).toBe('1');
});

test('renders the correct initial count', () => {
  const { getByText } = render(<Button />);
  const counter = getByText('0');

  expect(counter.textContent).toBe('0');
});

test('increments the counter multiple times when the button is clicked multiple times', () => {
  const { getByText } = render(<Button />);
  const button = getByText('Click me!');
  const counter = getByText('0');

  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);

  expect(counter.textContent).toBe('3');
});

test('does not decrement the counter when the button is not clicked', () => {
  const { getByText } = render(<Button />);
  const counter = getByText('0');

  expect(counter.textContent).toBe('0');
});
