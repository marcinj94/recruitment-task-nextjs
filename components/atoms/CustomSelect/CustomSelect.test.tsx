import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'components/theme/GlobalStyle';
import { theme } from 'components/theme/theme';
import { CustomSelect } from '.';
import '@testing-library/jest-dom';

describe('Tests for CustomSelect component', () => {
  const options = ['🍎', '🍌', '☘️', '🚀'];
  const value = options[2];
  let methods: RenderResult;
  let selectOptions: HTMLOptionElement[];
  let select: HTMLSelectElement;

  beforeAll(() => {
    const mockOnChange = jest.fn();
    methods = render(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CustomSelect options={options} value={value} onChange={mockOnChange} />
      </ThemeProvider>,
    );
    selectOptions = methods.getAllByTestId('select-option') as HTMLOptionElement[];
    select = methods.getByTestId('select') as HTMLSelectElement;
  });

  it('Should display the correct number of options', () => {
    expect(selectOptions.length).toBe(options.length + 1); // dodatkowa opcja `Pokaż wszystkie`
  });

  it('Should correctly set default option', () => {
    expect(selectOptions[0].selected).toBeFalsy();
    expect(selectOptions[1].selected).toBeFalsy();
    expect(selectOptions[2].selected).toBeTruthy();
    expect(selectOptions[3].selected).toBeFalsy();
  });

  it('Should allow user to change option', () => {
    // '🚀'
    const lastOption = options[options.length - 1];
    userEvent.selectOptions(select, [lastOption]);
    expect(select.value).toEqual(lastOption);
    expect(selectOptions[options.length - 1].selected).toBeTruthy();
  });
});
