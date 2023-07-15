import { ComponentBase } from "../ComponentBase";

import { backgrounds, core } from "../../../retrowave/palette";

import { CoreColours } from "../../../../enums/CoreColours";

export const textInputTheme: ComponentBase = {
  palette: {
    background: {
      default: backgrounds.primary
    },
    border: {
      default: CoreColours.WHITE,
      hover: core.primaryHighlight,
      focus: core.primary,
    },
    typography: {
      primary: CoreColours.WHITE,
    }
  }
}
