import styled from 'styled-components';

export const BarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 12px 0;
  position: relative;

  @media (min-width: ${(props) => props.theme.screenWidthSize.mobile.large}) {
    justify-content: space-around;
  }

  @media (min-width: ${(props) => props.theme.screenWidthSize.tablet.large}) {
    gap: 30px;
    flex-wrap: nowrap;
  }
`;
