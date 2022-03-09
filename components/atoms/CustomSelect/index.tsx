import * as React from 'react';
import { DEFAULT_TAGS } from 'state-types/reports';
import { Label, Select, Option, StyledIcon } from './style';

interface CustomSelectProps {
  value: string;
  options: string[];
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
  flexOrder?: number;
}
export const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  options,
  onChange,
  flexOrder,
}) => (
  <Label flexOrder={flexOrder}>
    <Select value={value} onChange={onChange} data-testid="select">
      {options.map((id) => (
        <Option key={id} value={id} data-testid="select-option">
          {id}
        </Option>
      ))}
      <Option value={DEFAULT_TAGS.ALL} data-testid="select-option">
        Wszystkie
      </Option>
    </Select>
    <StyledIcon />
  </Label>
);
