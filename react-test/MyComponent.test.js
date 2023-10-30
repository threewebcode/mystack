import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('renders the component correctly', () => {
    render(<MyComponent name="John" />);
    const greetingElement = screen.getByText(/Hello, John!/i);
    expect(greetingElement).toBeInTheDocument();
  });

  it('renders the component with different name', () => {
    render(<MyComponent name="Jane" />);
    const greetingElement = screen.getByText(/Hello, Jane!/i);
    expect(greetingElement).toBeInTheDocument();
  });
});
