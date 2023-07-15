import { ThemeProvider } from 'styled-components';

import { TextInput } from '../../../components/Inputs/TextInput';
import { Size, sizes } from "../../../utils/enums/Size";
import { retrowave } from "../../../utils/theme";

export default {
  title: 'Inputs/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: [...sizes],
      control: 'select'
    },
    label: {
      description: 'The input label',
      control: 'text'
    }
  },
};

export const Default = {
  args: {
    size: Size.DEFAULT,
    label: "Placeholder"
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={retrowave}>
        <Story />
      </ThemeProvider>
    )
  ]
}

export const Large = {
  args: {
    size: Size.LARGE,
    label: "Placeholder"
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={retrowave}>
        <Story />
      </ThemeProvider>
    )
  ]
}

export const Small = {
  args: {
    size: Size.SMALL,
    label: "Placeholder"
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={retrowave}>
        <Story />
      </ThemeProvider>
    )
  ]
}
