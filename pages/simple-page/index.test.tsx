import * as React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '.';
import '@testing-library/jest-dom';

describe('Tests for simple-page', () => {
  it('Should render the heading', () => {
    render(<HomePage />);
    // const heading = screen.getByText(/Testing Next.js With Jasdest and React Testing Library/i); // wrong...
    const heading = screen.getByText(/Testing Next.js With Jest and React Testing Library/i);

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument();
  });
});
