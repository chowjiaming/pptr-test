import 'styled-components';
import {QiiTheme} from './theme';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends QiiTheme {}

  export type ThemeColour = keyof DefaultTheme['colours'];
  export type ThemeFontFamily = keyof DefaultTheme['fontFamilies'];
}
