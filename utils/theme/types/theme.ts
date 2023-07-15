import {
  Palette,
  Typography
} from ".";
import { ComponentBase } from "./components/ComponentBase";

export interface Theme {
  palette: Palette;
  typography: Typography;
  components: {
    inputs: {
      text: ComponentBase;
      button: ComponentBase;
    }
  };
}
