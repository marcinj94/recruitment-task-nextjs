import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  list-style-type: none;
  position: relative;
  padding-bottom: 20px;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    height: 1px;
    background-color: #dfdfdf;
  }

  &:last-child {
    padding-bottom: 0;
    &::after {
      display: none;
    }
  }

  @media (min-width: ${(props) => props.theme.screenWidthSize.tablet.small}) {
    padding-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-direction: row;

  @media (min-width: ${(props) => props.theme.screenWidthSize.tablet.small}) {
    padding-top: 8px;
    flex-direction: column;
    justify-content: flex-start;
    width: 18%;
  }
`;

export const RightWrapper = styled.div`
  flex-basis: 78%;
`;

export const ActionWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;

  @media (min-width: ${(props) => props.theme.screenWidthSize.tablet.small}) {
    gap: 20px;
  }
`;
