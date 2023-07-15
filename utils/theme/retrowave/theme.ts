import { Theme } from "../types/theme";
import { backgrounds, borders, core, mono } from './palette'

export const retrowave: Theme = {
  palette: {
    core,
    mono,
    backgrounds,
    borders,
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
