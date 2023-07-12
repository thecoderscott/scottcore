import { Theme } from "../types/theme";
import { core, mono } from './palette'

export const retrowave: Theme = {
  palette: {
    ...core,
    mono,
  },

  typography: {
    heading: '#FFFFFF',
    body: {
      default: mono.grey.default,
      emphasis: mono.grey.lighter
    }
  },

  components: {
    inputs: {
      text: {

      }
    }
  }
};
