import { css } from 'styled-components';

export const formStyles = css`
  display: block;
  box-shadow: 0 0 12px #ddd;
  border: none;
  border-bottom: 2px solid black;
  letter-spacing: 1.2px;
  font-size: 0.7em;

  @media (min-width: ${(props) => props.theme.screenWidthSize.tablet.small}) {
    font-size: 1em;
  }
`;
