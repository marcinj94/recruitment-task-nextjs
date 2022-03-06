import { formStyles } from 'components/atoms/style';
import { VscChevronDown } from 'react-icons/vsc';
import styled, { css } from 'styled-components';

interface LabelProps {
  flexOrder?: number;
}
export const Label = styled.label<LabelProps>`
  display: inline-block;
  position: relative;

  ${({ flexOrder }) =>
    flexOrder &&
    css`
      order: ${flexOrder};
    `}
`;

export const Select = styled.select`
  ${formStyles}
  background-color: #fff;
  padding: 10px 55px 10px 10px;
  cursor: pointer;
  position: relative;
  /* hide arrow */
  appearance: none;
  font-weight: bold;

  @media (min-width: ${(props) => props.theme.screenWidthSize.tablet.small}) {
    padding: 20px 55px 20px 20px;
  }
`;

export const StyledIcon = styled(VscChevronDown)`
  position: absolute;
  top: 45%;
  right: 10px;
  transform: translateY(-45%);
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.celadon};
  cursor: pointer;
  pointer-events: none;
`;

export const Option = styled.option``;
