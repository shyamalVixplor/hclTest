import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
});

describe('Increasse', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(2 + 2).toBe(4);
  });
});

describe('Decrease', () => {
  it('knows that 2 and 2 make 4', () => {
    expect(3 - 2).toBe(1);
  });
});