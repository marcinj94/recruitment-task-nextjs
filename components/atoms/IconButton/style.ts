import styled, { css } from 'styled-components';
import { PositionAbsolute } from '.';

interface ButtonProps {
  positionAbsolute?: PositionAbsolute;
}
export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  background-color: transparent;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;

  & > * {
    transition: transform 0.3s;
    @media (min-width: ${(props) => props.theme.screenWidthSize.desktop.XGA}) {
      &:hover {
        transform: translateX(-3px);
      }
    }
  }

  ${({ positionAbsolute }) =>
    positionAbsolute &&
    css`
      position: absolute;
      top: 50%;
      left: 5%;
      transform: translateY(-50%);
    `}
`;
