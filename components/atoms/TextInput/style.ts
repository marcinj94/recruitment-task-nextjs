import { formStyles } from 'components/atoms/style';
import styled, { css } from 'styled-components';

interface InputProps {
  flexOrder?: number;
}
export const Input = styled.input<InputProps>`
  ${formStyles}
  width: 100%;
  padding: 10px;
  &::placeholder {
    color: #acacac;
  }

  ${({ flexOrder }) =>
    flexOrder &&
    css`
      order: ${flexOrder};
    `}

  @media (min-width: ${(props) => props.theme.screenWidthSize.tablet.small}) {
    padding: 20px;
  }
`;
