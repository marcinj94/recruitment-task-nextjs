import { VscChevronDown, VscChevronUp } from 'react-icons/vsc';
import styled, { css } from 'styled-components';

interface ToggleButtonProps {
  active: boolean;
}
export const ToggleButton = styled.button<ToggleButtonProps>`
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.celadon};
  display: flex;
  padding: 4px 5px;
  align-items: center;
  gap: 3px;
  transition: 0.3s;
  position: relative;
  width: 100%;

  @media (min-width: ${(props) => props.theme.screenWidthSize.desktop.XGA}) {
    &:hover {
      background-color: ${({ theme }) => theme.colors.celadon};
      color: white;
    }
  }

  ${({ active }) =>
    active &&
    css`
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        height: 1px;
        background-color: #dfdfdf;
        transition: background-color 0.3s;
      }
    `}
`;

export const ButtonLabel = styled.span`
  position: relative;
`;

export const ButtonDescription = styled.span``;

const iconStyles = css`
  font-size: 1.4rem;
  transition: transform 0.3s;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: -22px;
`;

export const StyledIconUp = styled(VscChevronUp)`
  ${iconStyles}
`;

export const StyledIconDown = styled(VscChevronDown)`
  ${iconStyles}
`;

export const List = styled.ul`
  padding: 0;
`;

export const ListItem = styled.li`
  list-style-type: none;
  padding: 0;
  margin: 15px 0;
`;

export const Wrapper = styled.div`
  flex-grow: 1;
`;
