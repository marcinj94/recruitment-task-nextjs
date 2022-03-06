import { MainHeader, IconButton } from 'components/atoms';
import * as React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: relative;
`;

export const Header: React.FC = () => (
  <StyledHeader>
    <MainHeader>Raporty</MainHeader>
    <IconButton positionAbsolute ariaLabel="Page back" />
  </StyledHeader>
);
