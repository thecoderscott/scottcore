import {styled, css, ThemeProvider, keyframes} from 'styled-components';

import { retrowave } from "../../utils/theme";

import { Size } from "../../utils/enums/Size";

export interface TextInputProps {
  size?: Size;
  label: string;
}

export const TextInput = ({
  size = Size.DEFAULT,
  label,
  ...props
}: TextInputProps) => {

  return (
    <ThemeProvider theme={retrowave}>
      <StyledTextInput
        {...props}
        size={size}
        placeholder={label}
        type="text"
      />
    </ThemeProvider>
  );
}

const angleRotate = keyframes`
  from {
    --angle: 0deg;
  }

  to {
    --angle: 360deg;
  }
`;

const StyledTextInput = styled("input")<{
  size?: Size;
}>(({
  theme,
  size,
}) => css`
  z-index: 10;
  position: relative;
  outline: none;
  
  border-radius: 8px;
  padding: ${size === "large" ? "16px" : size === "default" ? "12px" : "8px"};
  margin-bottom: 12px;
  border: 2px solid ${theme.palette.backgrounds.primary};

  &:before {
    content: "";
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    //background: ${theme.palette.backgrounds.primary} padding-box;
    background: red padding-box;
    border-radius: 8px;
    border: 2px solid transparent;
  }

  &:after {
    content: "";
    z-index: 1;
    position: absolute;
    border-radius: 8px;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    // background: ${theme.palette.borders.gradient} border-box;
    background: green padding-box;
  }
`);
