import styled from 'styled-components';

export const ReportTitle = styled.h2`
  font-weight: 500;
  margin: 0;
  font-size: 1rem;
  padding-top: 10px;

  @media (min-width: ${(props) => props.theme.screenWidthSize.tablet.small}) {
    font-size: 1.2rem;
    padding-top: 0;
  }
`;
