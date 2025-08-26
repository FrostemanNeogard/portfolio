import "styled-components";
import { ThemeType } from "./util/types/themeType";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
