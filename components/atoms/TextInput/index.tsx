import * as React from 'react';
import { Input } from './style';

interface TextInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  flexOrder?: number;
}
export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  flexOrder,
}) => (
  <Input
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    flexOrder={flexOrder}
  />
);
