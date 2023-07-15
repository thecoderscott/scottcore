import { TextInput } from '../../../components/Inputs/TextInput';
import {Size, sizes} from "../../../utils/enums/Size";

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
  }
}

export const Large = {
  args: {
    size: Size.LARGE,
    label: "Placeholder"
  }
}

export const Small = {
  args: {
    size: Size.SMALL,
    label: "Placeholder"
  }
}
