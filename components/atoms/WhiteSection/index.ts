import styled from 'styled-components';

export const WhiteSection = styled.section`
  background-color: white;
  margin: 0 5%;
  padding: 10px;

  @media (min-width: ${(props) => props.theme.screenWidthSize.tablet.small}) {
    padding: 40px;
  }

  @media (min-width: ${(props) => props.theme.screenWidthSize.desktop.XGA}) {
    max-width: ${(props) => props.theme.screenWidthSize.desktop.XGA};
    margin: 0 auto;
    width: 100%;
  }
`;
