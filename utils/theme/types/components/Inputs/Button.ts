import { ComponentBase } from "../ComponentBase";

import { backgrounds, core } from "../../../retrowave/palette";

import { CoreColours } from "../../../../enums/CoreColours";

export const buttonTheme: ComponentBase = {
  palette: {
    background: {
      default: backgrounds.primary,
      hover: backgrounds.secondary
    },
    border: {
      default: CoreColours.WHITE,
      hover: core.primary,
    },
    typography: {
      primary: CoreColours.WHITE,
    }
  }
}
