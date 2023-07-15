import color from 'color';

import { Palette } from "../../types";

export const backgrounds: Palette["backgrounds"] = {
  primary: '#060817',
  secondary: '#230050',
  gradient: `linear-gradient(180deg, ${color("#060817").alpha(.5)} 0%, ${color("#230050").alpha(.5)} 100%)`
}
