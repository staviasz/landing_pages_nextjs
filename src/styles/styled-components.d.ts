/* eslint-disable @typescript-eslint/no-empty-interface */
import { Theme } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
