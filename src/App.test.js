import {render, screen} from '@testing-library/react';
import App from './App';
import React from 'react';


test('renders login link', () => {
  render(<App />);
  const linkElement = screen.getByText('Login');
  expect(linkElement).toBeInTheDocument();
});
