import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'components/theme/GlobalStyle';
import { theme } from 'components/theme/theme';
import { ErrorMsg } from '.';
import '@testing-library/jest-dom';

describe('Tests for ErrorMsg component', () => {
  let methods: RenderResult;
  const description = 'Wystąpił nieoczekiwany błąd';
  let header: HTMLElement;
  let paragraph: HTMLElement;

  beforeAll(() => {
    methods = render(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ErrorMsg description={description} />
      </ThemeProvider>,
    );
    header = methods.getByRole('heading', {
      level: 2,
    });
    paragraph = methods.getByText(description);
  });

  it('Should render the heading', () => {
    expect(header).toBeInTheDocument();
  });

  it('Should contains Ups! text', () => {
    expect(header).toHaveTextContent('Ups!');
  });

  it('Should paragraph contains description value', () => {
    expect(paragraph).toHaveTextContent(description);
  });
});
