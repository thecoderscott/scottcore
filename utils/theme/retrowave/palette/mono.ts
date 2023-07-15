import { CoreColours } from "../../../enums/CoreColours";

import { Palette } from "../../types";

export const mono: Palette["mono"] = {
  black: CoreColours.BLACK,
  white: CoreColours.WHITE,
  grey: {
    lightest: '#EEEEEE',
    lighter: '#CCCCCC',
    light: '#AAAAAA',
    default: '#888888',
    dark: '#666666',
    darker: '#444444',
    darkest: '#222222',
  }
}
