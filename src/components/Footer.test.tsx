import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('displays the copyright statement', () => {
    // Setup
    render(<Footer />);
    // Verify
    expect(screen.getByText(/©/i)).toBeVisible();
  });
});
