import * as React from 'react';
import { Container, Header, Description } from './style';

interface ErrorMsgProps {
  description: string;
}
export const ErrorMsg: React.FC<ErrorMsgProps> = ({ description }) => (
  <Container>
    <Header>Ups!</Header>
    <Description>{description}</Description>
  </Container>
);
