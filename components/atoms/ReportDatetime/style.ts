import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

export const labelStyles = css`
  display: block;
  font-size: 0.9rem;
  font-weight: bold;
`;

export const StyledDate = styled.span`
  ${labelStyles}
`;

export const StyledTime = styled.span`
  ${labelStyles}
`;
