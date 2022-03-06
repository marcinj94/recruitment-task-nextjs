import styled, { css } from 'styled-components';
import { GrFormClose } from 'react-icons/gr';
import { Active } from '.';

interface ButtonProps {
  active: Active;
}
export const Button = styled.button<ButtonProps>`
  font-size: 0.8em;
  cursor: pointer;
  padding: 6px 40px 6px 10px;
  border: none;
  background-color: transparent;
  box-shadow: 0 0 0 2px #e7e7e7;
  border-radius: 5px;
  color: #b8b8b8;
  position: relative;
  transition: 0.3s;
  font-weight: 700;

  ${({ active }) =>
    active &&
    css`
      color: black;
      background-color: rgb(247, 252, 253);
      box-shadow: 0 0 0 2px #f7f7f7;
    `}

  @media (min-width: ${(props) => props.theme.screenWidthSize.desktop.XGA}) {
    font-size: 0.9em;
    &:hover {
      color: ${({ active }) => (active ? '#000' : '#a7a7a7')};
      box-shadow: 0 0 0 2px ${({ active }) => (active ? '#d7d7d7' : '#d1d1d1')};
    }
  }
`;

export const StyledIcon = styled(GrFormClose)`
  font-size: 1.5em;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 3px;
`;
