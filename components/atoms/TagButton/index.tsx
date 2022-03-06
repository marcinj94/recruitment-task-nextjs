import * as React from 'react';
import { Button, StyledIcon } from './style';

export type Active = boolean;

interface TagButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  active: Active;
}

export const TagButton: React.FC<TagButtonProps> = ({ children, onClick, active }) => (
  <Button type="button" onClick={onClick} active={active}>
    {children}
    {active && <StyledIcon />}
  </Button>
);
