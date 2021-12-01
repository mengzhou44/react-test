import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  expect(getByText(/learn react/i)).not.toBeNull();
});

test('click button should display visited 1 times', () => {
  const { getByText } = render(<App />);
  const button = getByText('Visit');

  userEvent.click(button);
  expect(getByText('Visited 1 times')).not.toBeNull();
});

test('type welcome, should display welcome', () => {
  const { getByText, getByLabelText, queryByText } = render(<App />);
  const input = getByLabelText('Search');

  expect(queryByText('welcome')).toBeNull();

  userEvent.type(input, 'welcome');

  expect(getByText('welcome')).not.toBeNull();
});
