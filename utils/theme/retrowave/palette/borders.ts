import { CoreColours } from "../../../enums/CoreColours";

import { Palette } from "../../types";

export const borders: Palette["borders"] = {
  primary: CoreColours.WHITE,
  gradient: `linear-gradient(var(--angle), var(--gradientFrom) 0%, var(--gradientTo) 100%)`
}
