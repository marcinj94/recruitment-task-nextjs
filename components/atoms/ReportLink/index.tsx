import styled from 'styled-components';

export const ReportLink = styled.a`
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.celadon};
  font-size: 0.9rem;
  margin: 0;
  padding: 4px 4px 4px 0;
  text-decoration: none;

  @media (min-width: ${(props) => props.theme.screenWidthSize.desktop.XGA}) {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ReportLinkLabel = styled.span``;

export const ReportLinkSize = styled.span`
  margin-left: 5px;
`;
