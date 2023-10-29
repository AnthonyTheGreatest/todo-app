import { render, screen } from '@testing-library/react';
import App from './App';
// import { expect } from 'vitest';

describe('App', () => {
  it('Renders hello world', () => {
    // Arrange
    render(<App />);
    const element = screen.getByRole('heading', { level: 1 });
    // Act
    // Expect
    expect(element).toHaveTextContent('Hello World');
    expect(element).toBeVisible();
  });
});
