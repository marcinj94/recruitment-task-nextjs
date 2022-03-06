import styled, { css } from 'styled-components';

interface RoundedButtonProps {
  positionAbsolute?: boolean;
  verticalCenter?: boolean;
  rightPosition?: number;
  flexOrder?: number;
}
export const RoundedButton = styled.button<RoundedButtonProps>`
  background-color: ${({ theme }) => theme.colors.celadon};
  font-family: ${({ theme }) => theme.fontFamily};
  border: none;
  color: white;
  padding: 10px 30px;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 0.7em;

  ${({ flexOrder }) =>
    flexOrder &&
    css`
      order: ${flexOrder};
    `}

  @media (min-width: ${(props) => props.theme.screenWidthSize.tablet.small}) {
    font-size: 1em;
  }

  @media (min-width: ${(props) => props.theme.screenWidthSize.desktop.XGA}) {
    &:hover {
      box-shadow: inset 0 0 0 2px ${({ theme }) => theme.colors.celadon};
      color: ${({ theme }) => theme.colors.celadon};
      background-color: transparent;
    }
  }

  @media (min-width: ${(props) => props.theme.screenWidthSize.tablet.large}) {
    ${({ positionAbsolute }) =>
      positionAbsolute &&
      css`
        position: absolute;
      `}
    ${({ verticalCenter }) =>
      verticalCenter &&
      css`
        top: 50%;
        transform: translateY(-50%);
      `}

    ${({ rightPosition }) =>
      rightPosition &&
      css`
        right: ${rightPosition}px;
      `}
  }
`;
