import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  gap: 20px;
  margin: 20px 0 0;

  @media (min-width: ${(props) => props.theme.screenWidthSize.tablet.small}) {
    margin: 30px 0 20px;
  }
`;

export const ListItem = styled.li`
  list-style-type: none;
`;
