import { styled, css } from 'styled-components';

import { Size } from "../../utils/enums/Size";

export interface TextInputProps {
  size?: Size;
  label: string;
}

export const TextInput = ({
  size = Size.DEFAULT,
  label,
  ...props
}: TextInputProps) => (
  <StyledTextInput
    {...props}
    size={size}
    placeholder={label}
    type="text"
  />
);

const StyledTextInput = styled("input")<{
  size?: Size;
}>(({
  theme,
  size,
}) => css`
  outline: none;
  
  color: ${theme.components.inputs.text.palette.typography.primary};
  background: ${theme.components.inputs.text.palette.background.default};

  padding: ${size !== Size.DEFAULT ? "12px" : "8px"};
  font-size: ${size === Size.LARGE ? "18px" : size === Size.SMALL ? "10px" : "14px"};
  
  border-radius: 8px;
  margin-bottom: 12px;

  border: 2px double ${theme.components.inputs.text.palette.border.default};
  transition: border 0.2s ease-in-out;
  
  &:hover {
    border: 2px double ${theme.components.inputs.text.palette.border.hover};
  }
  
  &:focus,
  &:focus-within {
    border: 2px double ${theme.components.inputs.text.palette.border.focus};
  }
`);
