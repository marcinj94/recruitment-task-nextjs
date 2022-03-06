import * as React from 'react';
import { IconType } from 'react-icons/lib';
import { VscArrowLeft } from 'react-icons/vsc';
import { Button } from './style';

export type PositionAbsolute = boolean;

interface IconButtonProps {
  type?: 'button' | 'submit' | 'reset' | undefined;
  icon?: IconType;
  positionAbsolute?: PositionAbsolute;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  ariaLabel: string;
}

export const IconButton: React.FC<IconButtonProps> = ({
  type = 'button',
  icon = <VscArrowLeft />,
  positionAbsolute,
  onClick,
  ariaLabel,
}) => (
  <Button type={type} aria-label={ariaLabel} positionAbsolute={positionAbsolute} onClick={onClick}>
    {icon}
  </Button>
);
