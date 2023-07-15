import { styled, css } from 'styled-components';

import { Size } from "../../utils/enums/Size";
import {ReactNode} from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  size?: Size;
  type?: "button" | "submit" | "reset";
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
}

export const Button = ({
  size = Size.DEFAULT,
  type = "button",
  buttonText,
  prefixIcon,
  suffixIcon,
  ...props
}: ButtonProps) => (
  <StyledButton
    {...props}
    size={size}
    type={type}
  >
    <StyledGrid>
      <StyledGridItem>{!!prefixIcon && prefixIcon}</StyledGridItem>
      <StyledGridItem>{buttonText}</StyledGridItem>
      <StyledGridItem>{!!suffixIcon && suffixIcon}</StyledGridItem>
    </StyledGrid>
  </StyledButton>
);

const StyledButton = styled("button")<{
  size?: Size;
}>(({
  theme,
  size,
}) => css`
  outline: none;
  cursor: pointer;
  
  padding: ${size === Size.LARGE ? "12px 24px" : size === Size.SMALL ? "8px 12px" : "12px 24px"};
  font-size: ${size === Size.LARGE ? "18px" : size === Size.SMALL ? "10px" : "14px"};

  border-radius: 8px;

  border: 2px double ${theme.components.inputs.button.palette.border.default};
  transition: all 0.2s ease-in-out;

  color: ${theme.components.inputs.button.palette.typography.primary};
  background: ${theme.components.inputs.button.palette.background.default};

  &:hover {
    background: ${theme.components.inputs.button.palette.background.hover};
    border: 2px double ${theme.components.inputs.button.palette.border.hover};
  }
`);

const StyledGrid = styled("div")`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 0 8px;
  align-items: center;
  justify-content: center;
`;

const StyledGridItem = styled("div")`
  display: grid;
`;
