import 'styled-components'
import { defaultTheme } from '../styles/theme'

export type Theme = typeof defaultTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
