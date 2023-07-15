import color from 'color';

import { Palette } from "../../types";

export const borders: Palette["borders"] = {
  primary: "#FFF",
  gradient: `linear-gradient(180deg, ${color("#F6019D").alpha(.5)} 0%, ${color("#2DE2E6").alpha(.5)} 100%)`
}
