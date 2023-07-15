import { Theme } from "../types/theme";
import { backgrounds, borders, core, mono } from './palette'

import { CoreColours } from "../../enums/CoreColours";

import { textInputTheme, buttonTheme } from "../types/components/Inputs";

export const retrowave: Theme = {
  palette: {
    core,
    mono,
    backgrounds,
    borders,
  },

  typography: {
    heading: CoreColours.WHITE,
    body: {
      default: mono.grey.default,
      emphasis: mono.grey.lighter
    }
  },

  components: {
    inputs: {
      text: textInputTheme,
      button: buttonTheme
    },
  }
};
