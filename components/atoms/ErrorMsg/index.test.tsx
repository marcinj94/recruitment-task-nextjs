import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'components/theme/GlobalStyle';
import { theme } from 'components/theme/theme';
import { ErrorMsg } from '.';
import '@testing-library/jest-dom';

describe('Tests for simple-page', () => {
  it('Should render the heading', () => {
    const description = 'Wystąpił nieoczekiwany błąd';

    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ErrorMsg description={description} />
      </ThemeProvider>,
    );

    const header = getByRole('heading', {
      level: 2,
    });

    // check exists of h2
    expect(header).toBeInTheDocument();
    // check if contains Ups! text
    expect(header).toHaveTextContent('Ups!');
    // check if paragraph contains description value
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
