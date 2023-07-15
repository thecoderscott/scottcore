import { ThemeProvider } from 'styled-components';
import { HelpCircle, ArrowRight } from 'react-feather';

import { Button } from "../../../components/Inputs/Button";
import { Size, sizes} from "../../../utils/enums/Size";
import { retrowave } from "../../../utils/theme";

export default {
  title: 'Inputs/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: [...sizes],
      control: 'select'
    },
    type: {
      options: ["button", "submit", "reset"],
      control: 'select'
    },
    buttonText: {
      control: 'text'
    }
  },
};

export const Default = {
  args: {
    size: Size.DEFAULT,
    type: "button",
    buttonText: "Button"
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
    type: "button",
    buttonText: "Button"
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
    type: "button",
    buttonText: "Button"
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={retrowave}>
        <Story />
      </ThemeProvider>
    )
  ]
}

export const WithPrefixIcon = {
  args: {
    size: Size.DEFAULT,
    type: "button",
    buttonText: "Get Help",
    prefixIcon: <HelpCircle />
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={retrowave}>
        <Story />
      </ThemeProvider>
    )
  ]
}

export const WithSuffixIcon = {
  args: {
    size: Size.DEFAULT,
    type: "button",
    buttonText: "Read More",
    suffixIcon: <ArrowRight />
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={retrowave}>
        <Story />
      </ThemeProvider>
    )
  ]
}
