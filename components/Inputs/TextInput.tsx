import { styled } from 'styled-components';

export interface TextInputProps {

}

export const TextInput = (props: TextInputProps) => {

  return (
    <StyledTextInput
      {...props}
      type="text"
    />
  );
}

const StyledTextInput = styled("input")`

`;
